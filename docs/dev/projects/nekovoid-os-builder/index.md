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

## See also

- [Build ISO](./build) — the build commands and available editions.


