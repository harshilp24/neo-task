# Style and tone

How Neo docs sound. These rules apply to every page type.

## Voice

- **Plain and direct.** Write the way a knowledgeable colleague would explain it at their desk.
- **Second person, present tense, active voice.** "Click **Start**. The task appears in the column." Not "The task will be displayed once Start has been clicked."
- **Short sentences.** One idea per sentence. Split anything over about 25 words.
- **British English.** *organisation*, *colour*, *behaviour*, *cancelled*.
- **Sentence case** for titles and headings. "Add a track for each workstream", not "Add A Track For Each Workstream".

## Banned patterns

Never use these. The review checks for them.

| Pattern | Instead |
|---|---|
| Em dashes (—) and en dashes used as dashes | A full stop, a comma, or a colon |
| AI filler: *seamless(ly), robust, leverage, empower, unlock, delve, effortless, streamline, cutting-edge, game-changer, elevate, harness* | Say what it does: "starts the task on both tracks" |
| Hype: *powerful, amazing, simply, just, easily, intuitive* | Remove it. If it's easy, the steps show that. |
| Hedging: *basically, essentially, actually, in order to* | Remove it, or "to" |
| Idioms and filler adjectives: *on their plate, honest answer, at a glance (in prose)* | Say it literally: "every task a team is working on" |
| "Not X, but Y" framing, colon-then-reveal sentences | State Y |
| Scare quotes around ordinary words | Plain words |
| Future tense for UI results: "will appear" | Present tense: "appears" |
| Jargon the UI doesn't use: *capability, workstream lane, entity, CTA* | The UI's word: *Tracks*, *track*, *task*, **+ Add Track** |
| References to the PRD, tickets or internal names | Describe the product as shipped |

## Names and labels

- **Products:** Tasket, Friday, Studio, Drive. Always capitalised, never "the Tasket".
- **Friday** is a participant in the work. "Assign the task to Friday", not "use the Friday tool".
- **UI labels** in bold, exactly as shown: **Settings**, **+ Add Track**, **Mark Done**.
- **Statuses** in italics in running text: *Pending*, *Done*, *Not started*. In tables, use status chips (see [callouts_and_formatting.md](callouts_and_formatting.md)).
- **Feature names** capitalised when they mean the feature (Tracks), lower case when they mean the thing (a track, two tracks). A feature name takes a singular verb, even if it ends in s: "Tracks lets one task…", "Tracks is on".
- **Example data** in code style when the reader types it: `Spec`. In italics when it names something that already exists: *Redesign the sign-in page*.
- **Example names must not look like UI.** Avoid names that contain words from the interface, such as *Settings*, *Sign in* or *Start*. Introduce each one with what it is the first time in a step: "the task called *Redesign the sign-in page*". Use the reader's own project ("open your project") rather than naming one.

## Words for roles

Use the role names the product uses: **member**, **admin**, **guest**. "Any team member" includes guests only when the PRD says so; say it explicitly. See [persona_specific/](persona_specific/).

## Numbers and counts

- Use numerals for counts the UI shows: **1/4 done**, **2/4**.
- Write numbers in words up to nine in running text ("four tracks"), numerals from 10.

## Before you finish

Search the draft for "—", "will ", and every word in the banned table. Fix each one.
