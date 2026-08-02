# Style guide

> This guide defines how Neko-Void wiki pages are written. Following it keeps the wiki consistent, professional, and easy to read — the same qualities that make the Arch Wiki a reference.
>
> If you write or edit a page, read this first. The rules are short; the consistency is what matters.

---

## Principles

1. **One page, one topic.** A page answers one question: "How do I install NVIDIA drivers?", "What is runit?". Do not mix topics. If a page grows into two topics, split it.
2. **Dense and direct.** Every sentence carries information. No "In this tutorial, we will explore...". Start with the answer.
3. **Commands first, explanation just enough.** The reader came to do something. Show the command, then explain the minimum needed to understand it.
4. **Assume a competent reader, not an expert.** Explain what is Neko-Void-specific. Do not re-explain what Linux is. Link out for general concepts.
5. **No filler, no marketing.** This is documentation, not a landing page. No "amazing", "powerful", "easy".

---

## Frontmatter

Every page starts with frontmatter. No exceptions.

```yaml
---
title: Install NVIDIA drivers
description: How to install and configure proprietary NVIDIA drivers on Neko-Void
---
```

- `title`: short, imperative or noun phrase. Title Case.
- `description`: one sentence, says what the page is for. Used in search and previews.

---

## Article template

Every content page follows this structure. Sections that do not apply can be omitted, but the order stays.

```markdown
---
title: <Page title>
description: <One sentence>
---

# <Page title>

## Overview
Two to four lines. What this page covers and who it is for.

## Prerequisites
What the reader needs before starting (packages, access, another page read).

## Installation / Steps
The core. Numbered steps or command blocks. Each step does one thing.

## Configuration
Optional settings after the core step.

## Verification
How the reader confirms it worked. Usually a command and its expected output.

## Troubleshooting
Common problems on this topic, as **bold symptom** → cause → fix.

## See also
Links to related pages in the wiki.
```

### When to omit sections

- A reference page (like a command list) does not need "Installation" — use "Usage" instead.
- A concept page (like runit) uses "Overview", "Architecture", "Usage" instead of the template above.
- Never omit "See also" if related pages exist.

---

## Formatting rules

### Code blocks

- Always fenced, always with a language tag.
- Use `bash` for shell commands, the real language for code (`kotlin`, `sh`, `python`...).

```bash
kpm install nvidia
```

```kotlin
val x = 1
```

- For a command the reader must run as root, prefix with `#`:

```bash
# xbps-install -S nvidia
```

- For a command run as normal user, prefix with `$`:

```bash
$ kpm list
```

- Output of a command goes in its own block, with no language tag or `text`:

```text
Detected: NVIDIA GeForce RTX 3060
Driver: nvidia 550.40
```

### Inline code

Use backticks for:
- Commands and binaries: `kpm`, `xbps-install`, `neko-builder.sh`
- File paths: `/etc/sv/`, `/var/service/`
- Config keys and flags: `--use-root`, `SVDIR`
- UI elements when needed: press `Enter`

### Bold and italic

- **Bold** for emphasis on a key term the first time it appears, or for symptoms in troubleshooting.
- *Italic* sparingly, for introducing a new concept word.

### Headings

- One `#` H1 per page, equal to the title.
- Use `##` for sections, `###` for subsections. Do not skip levels.
- Headings in Title Case: `## Install NVIDIA Drivers`, not `## install nvidia drivers`.

### Lists

- Use `-` for unordered, `1.` for ordered.
- A list item that is a step starts with a verb: "Install the package", "Reboot the system".
- Avoid lists with one item. Either add more or write a sentence.

### Tables

Use tables for reference data (command lists, flag tables, comparison). Not for steps.

```markdown
| Command | Description |
|---|---|
| `kpm list` | List installed apps |
| `kpm install <pkg>` | Install an app |
```

### Admonitions (VitePress)

Use sparingly, only when the reader must not miss something.

```markdown
::: warning
Do not run this command on a production system.
:::
```

Types and when to use:
- `info` — useful but optional context
- `tip` — a better way to do what the page explains
- `warning` — something that can break the system
- `danger` — data loss or security risk

Do not stack five admonitions in a row. If everything is important, nothing is.

### Links

- Internal links: use relative paths: `[Style guide](./style-guide)`.
- External links: full URL, meaningful text: `[Void Linux docs](https://docs.voidlinux.org/)`.
- Never use "click here" as link text.

---

## Tone and voice

- **Direct.** "Install the package", not "You can now proceed to install the package".
- **Active voice.** "The installer formats the disk", not "The disk is formatted by the installer".
- **Second person, sparingly.** "Run the command" is enough; avoid "Now you should run the command".
- **Technical, not dry.** Precise words; no slang, no jokes, no marketing.
- **No emojis** in body text. The wiki reads as a reference.

---

## Naming pages

- Lowercase, hyphenated: `nvidia-drivers.md`, not `NvidiaDrivers.md` or `nvidia_drivers.md`.
- Noun or gerund: `installation.md`, `nvidia-drivers.md`. Avoid verbs: not `install-nvidia.md` (use `nvidia-drivers.md`).
- One `index.md` per directory, acting as the section overview.

---

## Bilingual pages (ES / EN)

- The two language versions must mirror each other in structure and content.
- Translate meaning, not word by word. Technical terms often stay in English (runit, package, flatpak) when there is no clear Spanish equivalent in use.
- Keep code blocks identical across languages. Commands do not translate.
- The Spanish site lives under `/es/`, English under root (or `/en/` when both exist explicitly).

---

## What to avoid

- Walls of text with no commands. This is a Linux wiki; show the terminal.
- Screenshots where a code block would do. Screenshots age and are hard to update.
- Duplicating upstream docs. Link to Void Linux docs instead of copying them. If you must copy, attribute clearly (like the runit page does with Gentoo).
- Personal opinions or "I think". State facts; if unsure, do not write it.

---

## Quick checklist before you commit

- [ ] Frontmatter present (`title`, `description`).
- [ ] Follows the article template (or a clear reason not to).
- [ ] Code blocks fenced with language tag.
- [ ] No broken internal links.
- [ ] Other language updated or noted.
- [ ] No emojis, no marketing language.
- [ ] Page name lowercase, hyphenated.

---

*Consistency is what makes a wiki trustworthy. Following this guide is how we get there.*
