---
title: Iruka XBPS
description: Graphical front-end for the XBPS package manager written in C++ using GTK 3
---

<p align="center">
  <img src="https://raw.githubusercontent.com/Neko-Void-Linux/iruka-xbps/main/resources/icons/iruka.png" alt="iruka-xbps logo" width="128">
</p>

# Iruka XBPS

A modern graphical front-end for the [XBPS](https://wiki.voidlinux.org/XBPS) package manager, written in C++ using GTK 3.

<img width="871" height="680" alt="image" src="https://github.com/user-attachments/assets/81225ccf-73ad-4e37-8d95-4f589ab26673" />

- **Repository:** [GitHub](https://github.com/Neko-Void-Linux/iruka-xbps)
- **Git Clone:** `git@github.com:Neko-Void-Linux/iruka-xbps.git`
- **Language:** C++17
- **UI Toolkit:** GTK 3
- **License:** WTFPL (GUI frontend) / BSD 3-Clause (Core/backend)

## Features

- **Debounced search:** Local package searching and filtering with instantaneous response.
- **Category sidebar:** Quickly filter by status (All, Installed, Not installed, Outdated) and heuristic categories (Multimedia, Office, Programming, Education, Graphics, Network, Games, Security, System, Utilities, Other).
- **Visual state:** Clear indicators for installed, available, outdated, or queued packages.
- **Detail panel:** Inspect package descriptions, metadata, package files, and disk size.
- **Action queue:** Batch install, uninstall, and unmark operations in a single coordinated transaction.
- **Single-prompt authentication:** A single privileged helper daemon (`iruka-helper`) is launched once through pkexec/polkit; every privileged command routes through it without repeated password prompts. The helper cleanly exits when Iruka closes.
- **Repository editor:** Integrated repository configuration editor.
- **Multilingual interface:** Native support for English, Spanish, Russian, Japanese, and Hungarian with an in-app language switcher.

## Prerequisites

- Void Linux (or any system running XBPS)
- C++17 compiler (GCC or Clang)
- GTK 3 development libraries
- Polkit (for privilege escalation)
- Meson and Ninja build systems

## Building and Installing

1. Configure the build directory:
   ```bash
   meson setup builddir --prefix=/usr
   ```

2. Compile the project:
   ```bash
   ninja -C builddir
   ```

3. Install the application:
   ```bash
   ninja -C builddir install
   ```

When running from `builddir` (without installing), translation catalogs are located automatically and the `Options > Language` menu works out of the box.

## Packaging with xbps-src

A Void Linux template lives in `pkg/iruka-xbps/template`. When building it:

- `gettext` must stay in `hostmakedepends` so the Meson `i18n` module can compile the `.mo` catalogs.
- The catalogs are installed under `/usr/share/locale/{es,ru,ja,hu}/LC_MESSAGES/`.
- Two binaries are installed: `iruka-xbps` (GUI) and `iruka-helper` (privileged daemon) in the same directory.

## Running

Run the binary directly from the terminal or launch it from your desktop application menu:

```bash
iruka-xbps
```

## Configuration

Settings are saved in the user's config directory:
`~/.config/iruka-xbps/iruka-xbps.conf` (includes UI language preference and window state).

## License

- GUI frontend code is licensed under the [WTFPL](http://www.wtfpl.net/).
- Core/backend integration code is licensed under the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause).
