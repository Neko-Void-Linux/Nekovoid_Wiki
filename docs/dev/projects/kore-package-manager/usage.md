---
title: Kore Usage
description: How to use kpm, the Kore Package Manager, in interactive and CLI mode
---

# Kore Usage

## Interactive Mode (TUI)

Call the tool with no arguments to open the interface:

```bash
$ kpm
```

Use the arrow keys to navigate, `Enter` to confirm, and `Esc` to go back or exit. The guided flow lets you select the app, extract it, and define the binary to link in one pass.

## Command Line Interface (CLI)

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

### Direct installation

Install multiple applications by name (if they exist in a repository) or by path to a local archive:

```bash
$ kpm install obsidian waterfox discord
```

For a single local archive with custom metadata, use these flags:

```bash
$ kpm install "/path/to/app.AppImage" --app-name "MyApp" --use-root "No" --category "Network"
```

| Flag | Description |
|---|---|
| `--app-name` (`-a`) | Name the application shows in the system |
| `--use-root` (`-u`) | Whether the `.desktop` shortcut requires `pkexec` |
| `--category` (`-c`) | XDG category for the menu (`Utility`, `Network`, `Game`, ...) |

### Smart uninstallation

Remove the folder, binary, and `.desktop` file of one or more apps at once:

```bash
$ kpm remove discord waterfox
```

### Repository management

The `repo` subcommand manages where `kpm` fetches apps from:

| Subcommand | Description |
|---|---|
| `kpm repo list` | Count of available packages by type (official, community, user) |
| `kpm repo pkg-list` | List all packages available to install |
| `kpm repo pkg-search <query>` | Search a package by name across all repositories |
| `kpm repo sync` | Sync the official and community package lists |
| `kpm repo add <name> <pkg> <url> <category> [--requires-root]` | Add a third-party repository |
| `kpm repo remove <name>` | Remove a custom repository |

## Shell completions

Installing `kpm` via `install.sh` configures autocomplete for Bash, Zsh, and Fish. Press `Tab` to complete commands and flags.

