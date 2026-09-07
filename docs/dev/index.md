# Development: Overview

> This is the development hub. Use the page index to jump between the project overview, starting points, and support information without losing your place.

Welcome to the Neko Void OS development ecosystem. This space is designed to centralize the knowledge, tools, and standards needed to build the distribution.

## The Project

Our development focuses on:

* **Neko Void OS:** Our base operating system featuring the MATE desktop and Kasha Installer.
* **ISO Builder:** The bash-based infrastructure used to compile the live distributions.
* **Kore Package Manager:** A minimalist Rust-based TUI/CLI package manager designed specifically for AppImages and tarballs.

## Projects

The detailed project documentation is organized as sections of the same development area:

### Neko Void OS

The ISO builder combines Void Linux's `live-maker` with Neko Void's package selection, kernels, and desktop configuration. See the [Neko Void OS Builder overview](./projects/nekovoid-os-builder/) and [ISO build instructions](./projects/nekovoid-os-builder/build).

### Kasha Installer

Kasha is the C and GTK installer used by Neko Void. Its documentation covers the [architecture](./projects/kasha-installer/architecture) and [build process](./projects/kasha-installer/build).

### Kore Package Manager

Kore (`kpm`) installs AppImages and tarballs into an isolated user location. See the [usage guide](./projects/kore-package-manager/usage) and [architecture](./projects/kore-package-manager/architecture).

## Where to start?

If you are new to the project, we recommend exploring the [Projects](./projects/index.md) section to understand the specific build architecture and how to compile your own ISO.

## Communication and Support

* **Issues:** To report errors, use the **Issues** tab within the Codeberg repositories.

<CommunityCard />
