---
title: Kore Package Manager
description: Overview of kpm, a minimalist Rust package manager for AppImages and tarballs
---

# Kore Package Manager

Kore (`kpm`) is a minimalist package manager for Linux written in Rust. It handles applications distributed as tarballs (`.tar.gz`, `.tar.xz`, `.tar.bz2`) and AppImages (`.AppImage`), installing them in isolation and keeping the home directory clean.

It is designed for Void Linux, Arch, and any system where pre-compiled software needs to be installed without touching the base system. It offers both an interactive terminal interface (TUI) and direct CLI commands.

- **License:** BSD
- **Language:** Rust
- **Source:** [GitHub](https://github.com/ezequielgk/Kore-Package-Manager)
- **Changelog:** [v2.1.6](https://github.com/ezequielgk/Kore-Package-Manager/blob/main/CHANGELOG.md)

## Features

- **Hybrid interface.** Interactive TUI and direct CLI commands.
- **Isolated install.** Extracts files to `~/.local/share/binaries` and symlinks the binary into `~/.local/bin`.
- **Menu integration.** Generates `.desktop` shortcuts automatically.
- **Atomic uninstall.** Removes the app folder, symlink, and shortcut in one step.
- **No runtime deps.** Built in Rust; needs no `fzf` or `bash` wrappers.

## Installation

Install the latest pre-compiled version:

```bash
$ curl -sSL https://raw.githubusercontent.com/ezequielgk/Kore-Package-Manager/main/install.sh | bash
```

::: tip
Ensure `~/.local/bin` is in your `$PATH` after install.
:::

## Requirements

Most dependencies ship with any Linux system by default:

- `tar` — used for decompression
- `pkexec` (optional) — only for apps marked to prompt for root
- `desktop-file-utils` (`update-desktop-database`) — to refresh the applications menu

## See also

- [Usage](./usage) — interactive and CLI commands.
- [Architecture](./architecture) — how Kore is structured internally.

