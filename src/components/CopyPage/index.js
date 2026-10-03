import React, {useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// "Copy page" split button: copy the page as Markdown, view that Markdown,
// or open the page in ChatGPT or Claude. The Markdown comes from the
// rendered page, so it matches what the reader sees.

function Glyph({children, size = 18}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      {children}
    </svg>
  );
}

const ICONS = {
  copy: (
    <>
      <rect x="8" y="8" width="12" height="12" rx="2.5" />
      <path d="M16 8V6.5A2.5 2.5 0 0 0 13.5 4h-7A2.5 2.5 0 0 0 4 6.5v7A2.5 2.5 0 0 0 6.5 16H8" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  chevron: <path d="m7 10 5 5 5-5" />,
  markdown: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2.5" />
      <path d="M6 15V9l2.5 3L11 9v6M16 9v6M13.8 12.8 16 15l2.2-2.2" />
    </>
  ),
  chatgpt: (
    <>
      <path d="M12 3.5a4 4 0 0 1 4 4v1.2l1 .6a4 4 0 0 1 1.5 5.5 4 4 0 0 1-1.5 1.5" />
      <path d="M17 16.3a4 4 0 0 1-5.5 1.5l-1-.6-1 .6a4 4 0 0 1-5.5-1.5 4 4 0 0 1 0-2" />
      <path d="M4.5 13.8a4 4 0 0 1 1.5-5.5l1-.6V6.5a4 4 0 0 1 4-3" />
      <path d="M9 8.5 12 10l3-1.5M12 10v4" />
    </>
  ),
  claude: (
    <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4M7.5 3.8l9 16.4M16.5 3.8l-9 16.4" />
  ),
  external: <path d="M8 16 16 8M9.5 8H16v6.5" />,
};

// Clean a copy of the rendered page so it converts to readable Markdown.
function prepare(root) {
  const clone = root.cloneNode(true);
  clone
    .querySelectorAll('a.hash-link, button, svg, [aria-hidden="true"]')
    .forEach((n) => n.remove());

  // Tabs: keep every panel, each under its tab's label.
  clone.querySelectorAll('.tabs-container').forEach((container) => {
    const labels = [...container.querySelectorAll('[role="tab"]')].map((t) =>
      t.textContent.trim(),
    );
    const out = document.createElement('div');
    container.querySelectorAll('[role="tabpanel"]').forEach((panel, i) => {
      const label = document.createElement('p');
      const strong = document.createElement('strong');
      strong.textContent = labels[i] ?? '';
      label.append(strong);
      out.append(label, ...panel.childNodes);
    });
    container.replaceWith(out);
  });

  // Callouts: a quote with the callout's title in bold.
  clone.querySelectorAll('.theme-admonition').forEach((note) => {
    const title = note
      .querySelector('[class*="admonitionHeading"]')
      ?.textContent.trim();
    const body = note.querySelector('[class*="admonitionContent"]');
    const quote = document.createElement('blockquote');
    if (title) {
      const p = document.createElement('p');
      const strong = document.createElement('strong');
      strong.textContent = title;
      p.append(strong);
      quote.append(p);
    }
    if (body) {
      quote.append(...body.childNodes);
    }
    note.replaceWith(quote);
  });

  return clone;
}

async function toMarkdown(selector, title) {
  const root = document.querySelector(selector);
  if (!root) {
    return `# ${title}\n`;
  }
  const [{default: TurndownService}, {gfm}] = await Promise.all([
    import('turndown'),
    import('turndown-plugin-gfm'),
  ]);
  const turndown = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
    emDelimiter: '*',
  });
  turndown.use(gfm);
  // Turndown pads list markers ("-   item", "1.  item"); tighten them.
  const body = turndown
    .turndown(prepare(root))
    .replace(/^(\s*)([-*]|\d+\.) +/gm, '$1$2 ');
  return `# ${title}\n\n${body}\n\nSource: ${window.location.href}\n`;
}

export default function CopyPage({selector, title, className}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const wrapRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!open) {
      return undefined;
    }
    const onDown = (e) => {
      if (!wrapRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const items = [...menuRef.current.querySelectorAll('[role="menuitem"]')];
        const at = items.indexOf(document.activeElement);
        const step = e.key === 'ArrowDown' ? 1 : -1;
        items[(at + step + items.length) % items.length]?.focus();
      }
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    menuRef.current?.querySelector('[role="menuitem"]')?.focus();
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const copy = async () => {
    const md = await toMarkdown(selector, title);
    await navigator.clipboard.writeText(md);
    setOpen(false);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const view = async () => {
    // Open the tab inside the click so popup blockers allow it, then fill it.
    const tab = window.open('', '_blank');
    const md = await toMarkdown(selector, title);
    const url = URL.createObjectURL(
      new Blob([md], {type: 'text/plain;charset=utf-8'}),
    );
    if (tab) {
      tab.location.href = url;
    }
    setOpen(false);
  };

  const prompt = () =>
    encodeURIComponent(
      `Read ${window.location.href} so I can ask questions about it.`,
    );

  const items = [
    {
      key: 'copy',
      icon: 'copy',
      label: 'Copy page',
      hint: 'Copy page as Markdown for LLMs',
      onClick: copy,
    },
    {
      key: 'view',
      icon: 'markdown',
      label: 'View as Markdown',
      hint: 'View this page as plain text',
      onClick: view,
      external: true,
    },
    {
      key: 'chatgpt',
      icon: 'chatgpt',
      label: 'Open in ChatGPT',
      hint: 'Ask questions about this page',
      href: () => `https://chatgpt.com/?hints=search&q=${prompt()}`,
      external: true,
    },
    {
      key: 'claude',
      icon: 'claude',
      label: 'Open in Claude',
      hint: 'Ask questions about this page',
      href: () => `https://claude.ai/new?q=${prompt()}`,
      external: true,
    },
  ];

  return (
    <div ref={wrapRef} className={clsx(styles.wrap, 'copy-page', className)}>
      <div className={styles.split}>
        <button type="button" className={styles.main} onClick={copy}>
          <Glyph size={16}>{copied ? ICONS.check : ICONS.copy}</Glyph>
          <span aria-live="polite">{copied ? 'Copied' : 'Copy page'}</span>
        </button>
        <button
          type="button"
          className={clsx(styles.toggle, open && styles.toggleOpen)}
          aria-haspopup="menu"
          aria-expanded={open}
          aria-label="More page actions"
          onClick={() => setOpen((o) => !o)}>
          <Glyph size={16}>{ICONS.chevron}</Glyph>
        </button>
      </div>

      {open && (
        <div ref={menuRef} className={styles.menu} role="menu">
          {items.map((item) => {
            const body = (
              <>
                <span className={styles.itemIcon}>
                  <Glyph>{ICONS[item.icon]}</Glyph>
                </span>
                <span className={styles.itemText}>
                  <span className={styles.itemLabel}>
                    {item.label}
                    {item.external && (
                      <span className={styles.ext}>
                        <Glyph size={14}>{ICONS.external}</Glyph>
                      </span>
                    )}
                  </span>
                  <span className={styles.itemHint}>{item.hint}</span>
                </span>
              </>
            );
            return item.href ? (
              <a
                key={item.key}
                role="menuitem"
                className={styles.item}
                href={item.href()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}>
                {body}
              </a>
            ) : (
              <button
                key={item.key}
                type="button"
                role="menuitem"
                className={styles.item}
                onClick={item.onClick}>
                {body}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
