---
title: Installing Neko Void
description: Step-by-step guide to installing Neko-Void OS onto your computer's disk
---

# Installing Neko Void

## Overview

Once booted into the Neko-Void Live session, you can perform a permanent installation to your hard drive or SSD using the built-in graphical installer.

## Installation Steps

### 1. Launch the installer

On the Live desktop, click on the Neko Void installer icon to open the setup wizard.

### 2. Select language

Choose your preferred language for the installation process and system locale.

### 3. Installation type and partitioning

Choose the partition strategy that fits your setup:

- **Clean Installation (Erase entire disk):** Recommended for dedicated systems. The installer will automatically format and partition the target drive.
- **Manual Partitioning:** Allows configuring custom mount points, separate `/boot` or `/home` partitions, swap space, or dual-boot configurations.

::: danger
The clean installation option will erase all data on the selected drive. Ensure you have backed up important files.
:::

### 4. Bootloader setup

Select the target disk where the GRUB bootloader should be installed.

### 5. System settings

Configure core system settings:

- **Hostname:** The computer's network name.
- **Timezone:** Your local geographic timezone.
- **Keyboard layout:** Your keyboard language and variant.

### 6. User accounts

- Set up your primary username and password.
- Define a separate password for the `root` (administrator) account for enhanced security.
- Optionally, enable **Auto-Login** if desired.

### 7. Privilege escalation

Select the privilege escalation tool for administrative tasks. **`doas`** is recommended for its simplicity and lightweight footprint, or choose **`sudo`** if preferred.

### 8. Confirmation and install

1. Review the configuration summary and confirm to begin writing the installation to disk.
2. Wait for the installer to finish copying files and applying configurations.
3. Once completed, remove the USB drive and click **Restart Now**. Your computer will boot into your fresh Neko Void installation.

## See Also

- [How to Report Issues](../troubleshooting/common-issues)
- [Booting into Live Mode](./booting)
