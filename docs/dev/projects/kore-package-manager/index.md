---
title: Kore Package Manager
description: Overview of kpm, a minimalist Rust package manager for AppImages and tarballs
---

# Kore Package Manager

Kore (`kpm`) is a package manager for Linux written in Rust. It installs applications distributed as tarballs (`.tar.gz`, `.tar.xz`, `.tar.bz2`) and AppImages (`.AppImage`) into an isolated location, keeping the home directory clean.

It runs on Void Linux, Arch, and any system where pre-compiled software needs to land without touching the base system. It provides an interactive terminal interface (TUI) and direct CLI commands.

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

## Usage

### Interactive mode (TUI)

Call the tool with no arguments to open the interface:

```bash
$ kpm
```

Use the arrow keys to navigate, `Enter` to confirm, and `Esc` to go back or exit. The guided flow lets you select the app, extract it, and define the binary to link in one pass.

### Command line interface (CLI)

For fast, non-interactive operations, `kpm` supports the following commands:

| Command | Short alias | Description |
|---|---|---|
| `list` | `-l`, `list-installed` | List installed applications |
| `install` | `-i` | Install one or more apps from local tarballs or repositories |
| `remove` | `-r` | Uninstall one or more installed apps |
| `update` | `-u` | Update installed apps from repositories |
| `repo` | — | Manage repositories (official, community, custom) |
| `help` | `-h`, `--help` | Print full help |
| — | `-V`, `--version` | Show the installed version |
| `--update-bin` | — | Update the `kpm` binary to the latest version |

#### Direct installation

Install multiple applications by name or by path to a local archive:

```bash
$ kpm install obsidian waterfox discord
```

For a single local archive with custom metadata, use these flags:

```bash
$ kpm install "/path/to/app.AppImage" --app-name "MyApp" --use-root "No" --category "Network"
```

| Flag | Description |
|---|---|
| `--app-name` (`-a`) | Name the app shows in the system |
| `--use-root` (`-u`) | Whether the `.desktop` shortcut requires `pkexec` |
| `--category` (`-c`) | XDG category for the menu (`Utility`, `Network`, `Game`, ...) |

#### Smart uninstallation

Remove the folder, binary, and `.desktop` file of one or more apps at once:

```bash
$ kpm remove discord waterfox
```

#### Repository management

The `repo` subcommand manages where `kpm` fetches apps:

| Subcommand | Description |
|---|---|
| `kpm repo list` | Count available packages by type (official, community, user) |
| `kpm repo pkg-list` | List all packages available to install |
| `kpm repo pkg-search <query>` | Search for a package across all repositories |
| `kpm repo sync` | Sync the official and community package lists |
| `kpm repo add <name> <pkg> <url> <category> [--requires-root]` | Add a third-party repository |
| `kpm repo remove <name>` | Remove a custom repository |

### Shell completions

Installing `kpm` with `install.sh` configures autocomplete for Bash, Zsh, and Fish. Press `Tab` to complete commands and flags.

## Architecture

By default, the tool isolates installed files into the proper user structure:

- **Extracted files:** `~/.local/share/binaries/[app-name]`
- **Global binaries (symlinks):** `~/.local/bin/[app-name]`
- **Shortcuts (XDG Desktop):** `~/.local/share/applications/[app-name].desktop`
