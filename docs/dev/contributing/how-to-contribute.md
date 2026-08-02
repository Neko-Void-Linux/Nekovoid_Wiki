# How to contribute

> Neko-Void is free software, and its documentation is free too. Anyone can improve it: fix a typo, write a missing guide, clarify a confusing step. You do not need to be a developer to contribute.

This page explains the workflow. If you want to know **how to write** (tone, structure, formatting), read the [Style guide](./style-guide).

---

## What you can contribute

| Type | Example | Difficulty |
|---|---|---|
| Typo / grammar fix | Correct a misspelled command | Low |
| Clarity improvement | Rewrite a confusing paragraph | Low |
| New guide | "How to install NVIDIA drivers" | Medium |
| Reference page | Document a `kpm` subcommand fully | Medium |
| Translation | Translate an English page to Spanish (or vice versa) | Medium |
| Troubleshooting entry | Add a symptom → cause → fix to Common Issues | Low |

Every contribution counts. A corrected typo is a valid pull request.

---

## Before you start

1. **Search first.** Check if the page or section already exists, or if someone has an open pull request for the same thing.
2. **Open an issue for big changes.** If you plan to write a new guide or restructure a page, open an issue first to discuss it. For small fixes, go straight to a pull request.
3. **One topic per pull request.** Do not mix unrelated changes in the same PR. If you fixed a typo AND added a guide, send two PRs.

---

## The workflow

```
1. Fork the repository on GitHub
        │
        ▼
2. Create a branch:  git checkout -b docs/install-nvidia
        │
        ▼
3. Write ONE page, following the Style guide and the article template
        │
        ▼
4. Commit with a clear message:
     git commit -m "docs(guides): add NVIDIA driver installation guide"
        │
        ▼
5. Push and open a Pull Request
        │
        ▼
6. A maintainer reviews with the PR checklist (see below)
        │
        ▼
7. Merge → Vercel publishes automatically
```

### Branch naming

Use a prefix that says what you did:

| Prefix | Use for |
|---|---|
| `docs/` | New or rewritten pages |
| `fix/` | Corrections to existing pages |
| `i18n/` | Translations |
| `style/` | Formatting, structure, non-content changes |

Examples: `docs/install-nvidia`, `fix/kore-usage-typo`, `i18n/es-runit`.

### Commit messages

Follow this format so the history stays readable:

```
docs(guides): add NVIDIA driver installation guide
fix(kore): correct the --use-root flag description
i18n(es): translate runit page to Spanish
```

- `type(scope): description`
- Description in lowercase, no period at the end, imperative mood ("add", "fix", "translate").

---

## The pull request checklist

A maintainer will review your PR against this list. You can check it yourself before opening the PR to speed things up.

- [ ] The page follows the [article template](./style-guide#article-template).
- [ ] Frontmatter is present (`title`, `description`).
- [ ] Commands are in fenced code blocks with the right language (` ```bash `).
- [ ] No broken links. If you link another page, it exists.
- [ ] If the page exists in both ES and EN, both are updated in the same PR (or a follow-up is tracked).
- [ ] No emojis in body text (allowed only in info/warning blocks if needed).
- [ ] Tone matches the wiki: dense, direct, useful.

---

## Updating both languages

Neko-Void's wiki is bilingual. When you change a page, the same change should reach the other language.

- [ ] If you write or edit `/docs/guides/foo.md`, also update `/docs/es/guides/foo.md` (or `/docs/en/...` if you started in Spanish).
- [ ] If the translation is not ready, note it in the PR so a translator picks it up. Do not block a good English change on a missing translation.

---

## Style and tone

Read the full [Style guide](./style-guide) before writing more than a typo fix. The short version:

- One page, one topic.
- Dense and direct. No filler.
- Commands first, explanation just enough.
- Follow the article template.

---

## Getting help

- Open an issue with the `question` label if you are stuck.
- Ask in the Discord `#wiki` channel.
- No question is too basic. We all started somewhere.

---

*This wiki improves because people like you contribute to it. Thank you.*
