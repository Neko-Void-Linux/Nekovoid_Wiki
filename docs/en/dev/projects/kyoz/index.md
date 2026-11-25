---
title: Kyoz
description: Simple, lightweight wrapper for the XBPS package manager on Void Linux written in Zig
---

# Kyoz

A simple, lightweight wrapper for the [XBPS](https://wiki.voidlinux.org/XBPS) package manager on Void Linux, written in [Zig](https://ziglang.org/).

- **Repository:** [GitHub](https://github.com/Neko-Void-Linux/kyoz)
- **License:** [WTFPL](http://www.wtfpl.net/)
- **Language:** Zig

## Requirements

- Void Linux
- [Zig](https://ziglang.org/) 0.17.x — only needed to build from source
- `sudo`, `doas`, or `su` at runtime for package operations (the first one found in `PATH` is used; `su -c` is the last resort)

## Build

```sh
# Install Zig if you haven't already
sudo xbps-install -S zig

# Get the sources and compile
git clone https://github.com/Neko-Void-Linux/kyoz
cd kyoz
zig build-exe kyo.zig -O ReleaseSafe
```

## Install

```sh
install -Dm 755 kyo ~/.local/bin/kyo
```

Make sure `~/.local/bin` is in your `PATH`.

You can also grab a prebuilt binary from the [latest release](https://github.com/Neko-Void-Linux/kyoz/releases/latest).

## Usage

```sh
kyo {install|update|remove|search|info|list|clean} [arguments...]
```

Run `kyo --h` (`-h` or `--help` also work) to show every available option, and `kyo --version` (`-v` also works) to print the version.

| Command | Alias | Arguments | Description |
| :--- | :---: | :---: | :--- |
| `install` | `i` | `<packages>` | Install packages |
| `update` | `u` | — | Update the system |
| `remove` | `r` | `<packages>` | Remove packages (with `-o`) |
| `search` | `s` | `<query>` | Search for packages |
| `info` | `-i`, `--info` | `<packages>` | Show package information |
| `list` | `-l`, `--list` | `[pattern]` | List installed packages |
| `clean` | `c` | — | Clean orphans and obsolete packages |

## Interactive menu

Running `kyo` with no arguments on a terminal opens a fullscreen interactive menu:

<img width="1274" height="670" alt="image" src="https://github.com/user-attachments/assets/6c2c6253-295a-4ad5-be1b-23d42890ad27" />

| Key | Action |
| :--- | :--- |
| `↑` / `↓` (or `k` / `j`) | Move |
| `Enter` | Select |
| `i` or `?` | Info screen |
| `l` | Switch language (English / Spanish) |
| `q` (or `Ctrl-C`) | Quit |

It can also be opened explicitly with `kyo tui` (or `kyo menu`).

Install, remove, update and clean operations ask for confirmation before running.

## Examples

```sh
# Install fastfetch
kyo install fastfetch
kyo i fastfetch

# Search for a package
kyo search neovim

# List installed packages
kyo list

# Show information about a package
kyo info neovim
```

## License

Released under the [WTFPL](http://www.wtfpl.net/).
