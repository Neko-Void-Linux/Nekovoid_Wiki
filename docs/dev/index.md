# Development: Overview

> This is the development hub. Use the page index to jump between the project overview, starting points, and support information without losing your place.

Welcome to the Neko Void OS development ecosystem. This space is designed to centralize the knowledge, tools, and standards needed to build the distribution.

## The Project

Our development focuses on:

* **Neko Void OS:** Our base operating system featuring the MATE desktop and Kasha Installer.
* **ISO Builder:** The bash-based infrastructure used to compile the live distributions.
* **Neko Kernel Manager:** A modern, reliable Linux kernel and DKMS manager for Void Linux built with C++20 and Qt6 QML.
* **Vouru:** A Void User Repository helper to build and install packages from `void-packages` and custom Git repos.
* **Kyoz:** A fast, lightweight wrapper for the XBPS package manager written in Zig with an interactive menu.
* **Iruka XBPS:** A graphical front-end for the XBPS package manager written in C++ using GTK 3.

## Projects

The detailed project documentation is organized as sections of the same development area:

### Neko Void OS

The ISO builder combines Void Linux's `live-maker` with Neko Void's package selection, kernels, and desktop configuration. See the [Neko Void OS Builder overview](./projects/nekovoid-os-builder/) and [ISO build instructions](./projects/nekovoid-os-builder/build).

### Kasha Installer

Kasha is the C and GTK installer used by Neko Void. Its documentation covers the [architecture](./projects/kasha-installer/architecture) and [build process](./projects/kasha-installer/build).

### Neko Kernel Manager

A native graphical kernel manager crafted specifically for Void Linux with C++20 and Qt6 (QML/Quick). See the [Neko Kernel Manager guide](./projects/neko-kernel-manager/).

### Vouru

Vouru is a Bash script to build and install packages from `void-packages` and custom Git repositories containing `xbps-src` templates. See the [Vouru guide](./projects/vouru/).

### Kyoz

Kyoz is a simple, lightweight wrapper for XBPS written in Zig with a fullscreen interactive menu. See the [Kyoz guide](./projects/kyoz/).

### Iruka XBPS

Iruka XBPS is a graphical front-end for the XBPS package manager written in C++ using GTK 3. See the [Iruka XBPS guide](./projects/iruka-xbps/).

## Where to start?

If you are new to the project, we recommend exploring the [Projects](./projects/index.md) section to understand the specific build architecture and how to compile your own ISO.

## Communication and Support

* **Issues:** To report errors, use the **Issues** tab within the Codeberg repositories.

<CommunityCard />
