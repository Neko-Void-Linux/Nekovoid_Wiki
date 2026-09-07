---
title: Neko Void Requirements
description: Check whether your hardware is ready to install and run Neko Void
---

# Neko Void Requirements

This page summarizes the required hardware and provides a quick check before creating installation media.

| Category | Minimum Requirements | Recommended Requirements |
|---|---|---|
| **XFCE, MATE and IceWM Environment** | 2 GB RAM | 4 GB RAM |
| **Other Desktop Environments** | 4 GB RAM | 4 GB RAM or more |
| **Minimum Processor** | Intel Celeron or Pentium, 1 core, 1.10 GHz, 64-bit architecture | Second generation Intel Celeron or Pentium, 2 cores, 64-bit |
| **Storage** | 64 GB | 64 GB or more |
| **Graphics Memory** | Integrated or dedicated GPU with 16 MB | iGPU or dedicated GPU with 512 MB or more |

## Before installing

Confirm these points before starting the installation:

- The processor uses a 64-bit architecture.
- The target disk has at least 64 GB available for the system.
- Important files on the target disk are backed up.
- You have chosen a desktop environment that matches the available memory.

::: warning
Installation can modify disk partitions. Review the selected disk and back up your data before continuing.
:::

## Check the hardware

You can inspect the main hardware details from a Linux session with these commands:

```bash
$ free -h                 # Available RAM
$ lscpu                   # Architecture and processor
$ lsblk -d -o NAME,SIZE,MODEL  # Disks and capacity
$ lspci | grep -E 'VGA|3D|Display'  # Detected GPU
```

Compare the output with the table above. If `lspci` is unavailable, skip that line and check graphics memory in the system settings.

## Choose the right desktop environment

With 2 GB of RAM, prefer XFCE, MATE, or IceWM. With 4 GB or more, you can consider other environments while remembering that open applications also use memory.

The recommended graphics memory helps provide a smoother experience, especially with compositors, high-resolution displays, or visual applications.

## Checklist

Before booting from the installation media, confirm that:

1. The ISO finished downloading.
2. The installation media was created on the correct USB device.
3. Files on the target disk are backed up.
4. The computer boots from USB and you can identify the disk where Neko Void will be installed.
