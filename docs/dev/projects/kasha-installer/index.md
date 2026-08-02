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

## See also

- [Architecture](./architecture) — how Kasha is structured.
- [Build](./build) — how to compile and run Kasha.


