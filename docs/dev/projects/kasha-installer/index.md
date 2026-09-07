---
title: Kasha Installer
description: Overview of Kasha, the modular C and GTK installer used by Neko-Void
---

# Kasha Installer

Kasha is the system installer used by Neko-Void. It is written in C with a GTK+ 3.0 interface and handles disk partitioning, bootloader setup, encryption, and basic system configuration.

- **Language:** C
- **UI toolkit:** GTK+ 3.0
- **Source:** [Codeberg](https://codeberg.org/javiercplus/Kasha-Installer)

## Features

- **Partitioning modes:**
    - UEFI: GPT table, 512MB ESP (FAT32), Ext4 root.
    - Legacy: MBR (MS-DOS) table, single Ext4 root with bootable flag.
- **Install modes:** clean install (erase disk), install alongside (dual-boot), or manual.
- **Encryption:** LUKS support for partitions.
- **Bootloader:** GRUB for both EFI and BIOS systems.
- **System configuration:** locale, hostname, timezone, and user account.

## Architecture

### Project structure

- `include/`: Contains `neko_installer.h` with core data structures and function prototypes.
- `src/core/`: Application logic and installation steps.
    - `main.c`: Entry point and GTK initialization.
    - `installer.c`: Coordination of the installation thread and logging.
    - `installer_steps.c`: Individual steps (partitioning, formatting, copying files, secondary configuration).
    - `partition_utils.c`: Logic for disk discovery and partition mapping.
    - `utils.c`: Generic helpers (shell execution, UUID retrieval, EFI detection).
- `src/ui/`: GTK+ 3.0 user interface components.
    - `ui.c`: Main window development and tab structure.
    - `ui_partition.c`: Partition selection and manual partitioning dialogs.
    - `ui_callbacks.c`: Event handlers for navigation and user input.

## Build and run

### Dependencies

Install the following before building:

- `gcc`
- `make`
- `pkg-config`
- `gtk+-3.0` development headers
- For LUKS support: `bash`, `grub`, `xxd`, and `sed`

On Devuan or Arch, use the universal branch of the project.

### Build

Compile for the default environment:

```bash
$ make
```

For other distributions (Artix, Arch, Devuan, Debian):

```bash
$ make universal
```

Clean the build artifacts:

```bash
$ make clean
```

### Change the logo

To replace the installer logo, convert the image with `xxd` and drop it in the project:

```bash
$ xxd -i logo.png > include/logo.h
```

Then replace `logo.h` in the source tree.

### Run

The installer needs root to manipulate disks, format partitions, and mount filesystems:

```bash
# ./neko_installer
```

Or use the convenience rule:

```bash
# make run
```

