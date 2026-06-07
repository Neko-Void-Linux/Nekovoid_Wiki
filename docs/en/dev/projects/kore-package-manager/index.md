# Kore Package Manager (kpm)
![License](https://img.shields.io/badge/license-BSD-cyan)
![Rust](https://img.shields.io/badge/language-Rust-orange)
[![Changelog](https://img.shields.io/badge/Changelog-v2.1.6-blueviolet?logo=keepachangelog&logoColor=white)](https://github.com/ezequielgk/Kore-Package-Manager/blob/main/CHANGELOG.md)
[![Contributing](https://img.shields.io/badge/Contributing-here-green)](https://github.com/ezequielgk/Kore-Package-Manager/blob/main/CONTRIBUTING.md)
[![Readme](https://img.shields.io/badge/Readme-Español-blueviolet?logo=keepachangelog&logoColor=white)](https://github.com/ezequielgk/Kore-Package-Manager/blob/main/README_es.md)


A minimalist and universal program manager for Linux, completely redesigned in **Rust**. It is specifically designed to handle applications distributed in **tarballs** (.tar.gz, .tar.xz, .tar.bz2) and **AppImages** (.AppImage).

Ideal for users of **Void Linux**, **Arch**, or any system where you need to install pre-compiled software in an isolated, clean way, featuring an elegant interactive terminal interface (TUI) based on `ratatui`.

## Main Features

* **TUI Navigation**: Explore your files and folders with a high-performance, immersive terminal interface.
* **Hybrid CLI Interface**: Use the interactive menu or run direct commands via terminal.
* **Smart Installation**: Extracts files to `~/.local/share/binaries`, keeping your HOME directory clean.
* **Binary Management**: Automatically creates symlinks in `~/.local/bin`.
* **Menu Integration**: Automatically generates `.desktop` shortcut files.
* **Noise-Free Extraction**: Runs background subcommands (`tar`), omitting terminal outputs that could clutter the interface (`stdout`/`stderr`).
* **Atomic Uninstallation**: Cleanly removes the application, symlink, and shortcut.

## Quick Installation

You can install the latest pre-compiled version directly by running:

```bash
curl -sSL https://raw.githubusercontent.com/ezequielgk/Kore-Package-Manager/main/install.sh | bash
```

> **Note**: This script automatically downloads the correct version from *GitHub Releases*. Make sure your `~/.local/bin` folder is in your system's `$PATH`.


## System Requirements

Since it is written in Rust, the need for external environment dependencies (like `fzf` or `bash`) has been eliminated. The only requirements on your system (the vast majority come pre-installed by default on Linux) are:

- `tar`: Used in the background for decompression.
- `pkexec` (Optional): Required only if you mark an application to prompt for superuser permissions.
- `desktop-file-utils` (`update-desktop-database`): Used to notify the system when an application is "uninstalled" and to refresh the applications menu.
