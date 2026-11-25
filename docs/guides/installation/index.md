---
title: Installation Guide
description: Complete step-by-step installation guide for Neko Void Linux, from system requirements to post-installation setup.
---

# Installation Guide

Welcome to the comprehensive installation guide for **Neko Void Linux**. This single guide walks you through every stage of the installation process: verifying hardware requirements, preparing bootable installation media, booting into the live environment, and completing the installation using the graphical **Kasha Installer**.

::: tip Fast Navigation
You can explore any part of this guide directly using the outline menu on the right or the quick links below:
- [1. System Requirements](#system-requirements)
- [2. Creating Installation Media](#creating-installation-media)
- [3. Booting into Live Mode](#booting-into-live-mode)
- [4. Installing Neko Void (Kasha Installer)](#installing-neko-void)
- [5. Post-Installation & Next Steps](#post-installation)
:::

---

## System Requirements

Before beginning the installation, ensure that your computer meets the necessary hardware specifications. Neko Void is designed to be lightweight and responsive, but hardware requirements vary depending on your choice of desktop environment or window manager.

| Category | Minimum Requirements | Recommended Requirements |
|---|---|---|
| **Lightweight Desktops (XFCE, MATE, IceWM)** | 2 GB RAM | 4 GB RAM |
| **Full Desktops / Modern Compositors** | 4 GB RAM | 8 GB RAM or more |
| **Processor** | Intel Celeron / Pentium (64-bit), 1 core, 1.10 GHz | Dual-core 64-bit CPU (2.0 GHz+) |
| **Storage Capacity** | 64 GB available disk space | 120 GB or more (SSD recommended) |
| **Graphics Memory (VRAM)** | Integrated or dedicated GPU with 16 MB | Dedicated GPU or iGPU with 512 MB+ |

### Pre-Installation Checklist

Confirm these key points before proceeding:

- [x] **64-bit architecture**: The target processor supports x86_64 instructions.
- [x] **Disk space**: The destination drive has at least 64 GB of free storage.
- [x] **Data backup**: Back up any crucial files on the destination drive to an external drive or cloud storage.
- [x] **Desktop selection**: Choose a desktop environment suited to your hardware specs (e.g., IceWM or XFCE for lower-spec machines).

::: warning Important Notice on Data Safety
The installation process can modify or reformat disk partitions. Please verify you have selected the correct disk and ensure all essential data has been backed up before confirming partition changes.
:::

### Inspecting Hardware in Linux

If you are currently running a Linux environment or live USB, you can inspect your hardware using these quick commands:

```bash
$ free -h                        # Check available RAM
$ lscpu                          # Processor details and architecture
$ lsblk -d -o NAME,SIZE,MODEL    # Detect disks and capacities
$ lspci | grep -E 'VGA|3D|Display' # Identify graphics card
```

---

## Creating Installation Media

The recommended and easiest method to install Neko Void is by creating a bootable USB flash drive using **[Ventoy](https://www.ventoy.net/en/download.html)**.

Ventoy turns your USB drive into a multiboot device where you simply copy and paste ISO files directly—no reformatting is required for future ISO additions.

### Setup Instructions (Windows, macOS, Linux)

1. **Download Ventoy**: Visit the [official Ventoy download page](https://www.ventoy.net/en/download.html), download the appropriate archive for your operating system, and extract it.
2. **Install Ventoy to USB**: Insert your USB drive (at least 8 GB recommended), launch the Ventoy application (`Ventoy2Disk`), select your USB drive from the device list, and click **Install**.
   ::: danger Warning
   Installing Ventoy will format your USB flash drive. Ensure you do not have critical files stored on the drive.
   :::
3. **Copy the ISO**: Once installation finishes, your USB drive will mount as a standard storage volume named `Ventoy`. Simply download the latest **Neko Void ISO** from [neko-void-linux.online](https://www.neko-void-linux.online/#downloads) and copy or drag the `.iso` file directly onto the USB drive.

<div class="theme-aware-image">
  <img class="theme-image-light" src="/guides/installation/ventoy-ex.png" alt="Ventoy2Disk utility screenshot on Windows/Linux" />
  <img class="theme-image-dark" src="/guides/installation/ventoy-ex-dark.png" alt="Ventoy2Disk utility screenshot on Windows/Linux in dark mode" />
</div>

---

## Booting into Live Mode

Once your USB drive is prepared with the Neko Void ISO:

1. **Insert the USB drive** into the computer where you wish to install Neko Void.
2. **Turn on or reboot the machine**.
3. **Open the BIOS/UEFI Boot Menu**: Immediately tap your motherboard's boot menu key repeatedly during boot (commonly `F12`, `F11`, `F8`, `F10`, `Esc`, or `Del` depending on the device brand).
4. **Select your USB drive** from the boot device list and press `Enter`.

### The Neko Void Boot Menu

When Ventoy or the ISO loader loads, select the Neko Void entry. You will be greeted by the Neko Void bootloader menu:

<div class="theme-aware-image">
  <img src="/guides/installation/boot-menu.png" alt="Neko Void GRUB boot menu showing Live boot option" />
</div>

Select the first option (**Neko Void Live**) and press `Enter`. The system will boot into the graphical live session.

### Live Environment Credentials

Once booted, the live desktop appears with full functionality so you can test your Wi-Fi, audio, display resolution, and hardware before installing:

- **Username:** `anon`
- **Password:** `voidlinux`

<div class="theme-aware-image">
  <img src="/guides/installation/live-mode.png" alt="Neko Void Live desktop environment preview" />
</div>

---

## Installing Neko Void

When you are ready to permanently install Neko Void to your computer's internal storage, locate and double-click the **Install Neko Void** icon on the live desktop.

<div class="theme-aware-image">
  <img src="/guides/installation/installer.png" alt="Launching Kasha Installer from the Neko Void desktop" />
</div>

The graphical **Kasha Installer** will launch. Follow the step-by-step wizard described below.

### 1. Installation Type

Select your preferred installation method:

- **Clean Installation (Erase entire disk)**: Recommended for most users. Automatically formats the selected disk and creates optimal partition schemes for Neko Void.
- **Manual Partitioning**: Recommended for advanced users wanting custom mount points, existing partition preservation, or specific dual-boot setups.

<div class="theme-aware-image">
  <img src="/guides/installation/type-i.png" alt="Choosing installation type in Kasha Installer" />
</div>

### 2. Disk Partitions

Select the destination disk where Neko Void will be installed. Double-check the disk model and size (`/dev/sda`, `/dev/nvme0n1`, etc.) to prevent accidentally overwriting other drives.

<div class="theme-aware-image">
  <img src="/guides/installation/partitions.png" alt="Selecting target disk and viewing partitions in Kasha Installer" />
</div>

### 3. Desktop Environment

Choose your preferred user interface and graphical environment. Options include popular lightweight desktop environments (such as XFCE or MATE) and modern window managers.

<div class="theme-aware-image">
  <img src="/guides/installation/desks.png" alt="Selecting desktop environment in Kasha Installer" />
</div>

### 4. Bootloader Configuration

Configure the bootloader (`GRUB`). Select your primary storage drive where the master boot record (MBR) or EFI system partition (ESP) resides so your computer can boot Neko Void automatically.

<div class="theme-aware-image">
  <img src="/guides/installation/grub.png" alt="Selecting the bootloader destination disk" />
</div>

### 5. System Settings

Customize regional and identification settings:

- **Computer Name (Hostname)**: The local network name for your computer.
- **Timezone**: Set your region and local time.
- **Keyboard Layout**: Choose your keyboard model and language layout.

<div class="theme-aware-image">
  <img src="/guides/installation/config-sys.png" alt="System settings: hostname, timezone, and keyboard layout" />
</div>

### 6. User Accounts

Create your everyday user account:

- **Full Name / Username**: Your personal account name.
- **User Password**: Choose a strong password.
- **Auto-Login**: Toggle automatic login on or off based on your preference.

<div class="theme-aware-image">
  <img src="/guides/installation/users.png" alt="Configuring username, user password, and auto-login" />
</div>

### 7. Root Security & Privilege Escalation

Set up administrative security:

- **Root Password**: Define the administrative `root` password. For security, it is best practice to choose a distinct password from your user account.
- **Privilege Escalator**: Choose your privilege escalation tool. `doas` is recommended for simplicity, security, and low overhead.

<div class="theme-aware-image">
  <img src="/guides/installation/root.png" alt="Setting root administrator password and choosing privilege escalator" />
</div>

### 8. Installation & Reboot

Review the summary of your choices and click **Install**. The installer will format partitions, copy system files, configure your settings, and set up the bootloader.

When the progress bar completes and displays **Installation Finished**:

1. Remove your USB flash drive from the computer.
2. Click the **Restart Now** button in the installer.
3. Your computer will reboot into your freshly installed Neko Void system!

---

## Post-Installation

Congratulations! Your Neko Void system is now installed and ready to use. Explore these next topics to master and configure your new system:

- **Init System & Services**: Learn how services and daemons are supervised using [runit (Init System)](/docs/concepts/runit).
- **Display Servers**: Check out the guides for [Wayland](/docs/concepts/wayland) compositors and [Xorg (X11)](/docs/concepts/xorg).
- **System Configuration**: Review [System Configuration](/docs/configuration/) for personalized tweaks and global settings.
- **Package Management**: Learn about native Void Linux package management with `xbps`, wrappers like [Kyoz](/dev/projects/kyoz/), user repository helpers like [Vouru](/dev/projects/vouru/), and graphical frontends like [Iruka XBPS](/dev/projects/iruka-xbps/).
- **Troubleshooting**: If you experience any post-installation issues (e.g. Wi-Fi or graphics), refer to the [Common Issues](/guides/troubleshooting/common-issues) guide.

<section class="related-links">

## See also <span class="related-links-kaomoji" aria-hidden="true">(˵ •̀ ᴗ - ˵ )</span>

- [Guides & Documentation](/guides/)
- [runit (Init System)](/docs/concepts/runit)
- [Wayland](/docs/concepts/wayland)
- [Common Issues](/guides/troubleshooting/common-issues)

</section>
