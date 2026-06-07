# About Neko-Void

Neko-Void is an unofficial Void Linux respin. It currently features a preconfigured MATE desktop environment (our main edition, though other ISOs with more desktops will be created) with selected software for a complete experience. It includes a powerful post-install assistant to tailor the system to your needs (gaming, design, music production, etc.), plus pre-installed Octoxbps, Tinyfetch, and btop. All backed with full Vulkan and Pipewire support.

## Core Features

### [Kasha Installer](https://codeberg.org/javiercplus/Kasha-Installer) & Post-Install
Our custom installer simplifies the Void Linux installation process (user, network, partitions). Once installed, a built-in post-install application installer allows you to automatically configure the system with one click for video editing, music production, design, gaming, office work, and more. 

### Performance Ready
Optimized for performance with full Vulkan support and preconfigured non-free Intel/AMD drivers, ensuring your hardware runs smoothly from the very first minute. 

## Under the Hood

### Base System & Init
Neko-Void is deeply rooted in the minimalism of **Void Linux**, utilizing its rolling-release model for continuous updates. It employs the `runit` init system, which guarantees incredibly fast boot times and low overhead compared to systemd.

### Desktop & Display
The default experience is built around the **MATE** desktop environment, combining classic paradigms with modern features. For the display server, users have the flexibility to choose between **X.Org** and **Xlibre** during installation or post-configuration.

### Package Management
Beyond the command-line power of `xbps`, Neko-Void integrates **Octoxbps** out-of-the-box, providing an intuitive graphical interface for searching, installing, and managing software. It also ships with [**Kore Package Manager**](https://github.com/ezequielgk/Kore-Package-Manager), a minimalist Rust-based hybrid manager (TUI/CLI) built specifically to handle isolated AppImages and Tarballs effortlessly across the system.

## Why it was created

The project originally started as a personal hobby. Over time, it evolved into a structured project aimed at offering an easy-to-install and user-friendly Void Linux version for the end user.

## Target Audience

This distribution is aimed at users who want a lightweight and robust operating system, easily customizable for their specific workflow without the usual complications of a manual setup from scratch. 

## The Team

* **Developer:** Javierc
* **Designer:** Hikawa
* **Sponsor:** S. A.
* **Artists:** Moony<3 & Era_dark_knight

## Official Links

* **Download ISO:** [SourceForge](https://sourceforge.net/projects/neko-void/)
* **Source Code:** [Codeberg](https://codeberg.org/javiercplus/Neko-Void)
* **DistroWatch:** [Neko-Void Page](https://distrowatch.com/table.php?distribution=nekovoid)
