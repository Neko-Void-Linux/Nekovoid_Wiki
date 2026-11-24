# Kasha Installer

A modular Linux system installer built with C and GTK+ 3.0.

## Features

- **Automatic and Manual Partitioning:**
    - *UEFI Mode:* GPT partition table, 512MB ESP (FAT32), and Ext4 root.
    - *Legacy Mode:* MBR (MS-DOS) partition table, single Ext4 root with bootable flag.
- **Installation Modes:** Clean install (erase disk), Install Alongside (dual-boot), or Manual.
- **Encryption:** LUKS support for partitions.
- **Bootloader:** GRUB installation for both EFI and BIOS systems.
- **System Configuration:** Locale, Hostname, Timezone, and User account management.

<section class="related-links">

## See also <span class="related-links-kaomoji" aria-hidden="true">(˵ •̀ ᴗ - ˵ )</span>

- [Projects](/en/dev/projects/)
- [Architecture](/en/dev/projects/kasha-installer/architecture)
- [Build Kasha](/en/dev/projects/kasha-installer/build)

</section>

