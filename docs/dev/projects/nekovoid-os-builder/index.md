---
title: Neko-Void OS Builder
description: Overview of the tools and process to build the Neko-Void Live ISO
---

# Neko-Void OS Builder

The Neko-Void OS builder is the set of scripts that build the Neko-Void Live ISO. The resulting image ships non-free support out of the box: Steam, gaming tools, and proprietary drivers.

It builds on top of Void Linux's `live-maker`, extended with Neko-Void's package selection, kernels, and configuration.

- **Base:** Void Linux `live-maker`
- **Source:** [Codeberg](https://codeberg.org/javiercplus/Neko-Void)
- **Output:** bootable Live ISO (X.Org and Xlibre editions)

## Setup

Clone the repository and initialize the submodules:

```bash
$ git clone https://codeberg.org/javiercplus/Neko-Void.git
$ cd Neko-Void
$ git submodule update --init --recursive
```

The submodules include the Neko Wizard and the Kasha installer module, which are integrated into the ISO.

## Build ISO

### Prerequisites

Complete the setup above before building. The build runs from the `live-maker` directory.

### Standard editions

Build the standard Neko-Void ISOs:

```bash
$ cd live-maker

# X.Org edition
$ bash neko-builder.sh xorg

# Xlibre edition
$ bash neko-builder.sh xlibre
```

### Rolling editions

Build editions with the latest kernel:

```bash
$ cd live-maker

# Rolling X.Org edition
$ bash neko-builder.sh rolling

# Rolling Xlibre edition
$ bash neko-builder.sh rollibre
```

### Advanced usage

The `neko-builder.sh` script accepts arguments for interactive or customized builds:

```bash
$ ./neko-builder.sh                     # Interactive mode
$ ./neko-builder.sh <desktop>           # Build a specific desktop
$ ./neko-builder.sh <desktop> -e "pkg"  # Add extra packages
$ ./neko-builder.sh doble               # Build xlibre + xorg
$ ./neko-builder.sh doble-isor          # Build rollibre + rolling
```

