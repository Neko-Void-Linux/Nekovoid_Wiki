---
title: Create Installation Media
description: How to prepare a bootable USB flash drive to install Neko-Void OS
---

# Create Installation Media

## Overview

The recommended method to install Neko-Void is by preparing a bootable USB drive. We advise using **Ventoy**, an open-source multi-platform tool that allows booting ISO images simply by copying them to the drive.

## Requirements

- A USB flash drive with at least 4 GB capacity.
- The Neko Void ISO image downloaded from [Download](/download/).
- The [Ventoy](https://www.ventoy.net/en/download.html) tool (available for Windows, macOS, and Linux).

## Steps with Ventoy

1. **Download Ventoy**: Grab the appropriate archive for your operating system from the [official Ventoy website](https://www.ventoy.net/en/download.html) and extract it.
2. **Launch Ventoy**: Open the installer (`Ventoy2Disk` on Windows or the script/GUI on Linux).
3. **Install to USB**: Select your USB drive from the device list and click **Install**.

::: warning
Installing Ventoy will format the selected USB drive. Ensure you back up any critical data beforehand.
:::

4. **Copy the ISO**: Once Ventoy finishes formatting, open the USB drive partition in your file manager and copy the Neko Void `.iso` file directly onto it.

## Alternative Method on Linux (`dd`)

On Linux systems, you can also write the ISO directly using the command line:

```bash
# dd if=nekovoid.iso of=/dev/sdX bs=4M status=progress oflag=sync
```

::: danger
Replace `/dev/sdX` with your exact USB drive device identifier. Selecting the wrong drive will lead to irreversible data loss.
:::

## See Also

- [Booting into Live Mode](./booting)
- [System Requirements](./requirements)
