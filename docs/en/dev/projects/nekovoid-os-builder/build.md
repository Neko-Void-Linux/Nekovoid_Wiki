---
title: Build the Neko-Void ISO
description: Commands and options to build the Neko-Void Live ISO
---

# Build the Neko-Void ISO

## Prerequisites

Before building, complete the [cloning and setup](./) on the overview page: clone the repository and initialize the submodules.

```bash
git clone https://github.com/Neko-Void-Linux/Neko-Void.git Neko-Void
cd Neko-Void
git submodule update --init --recursive
```

## Build Instructions

To build a Neko-Void ISO, use the `neko-builder.sh` script located in the `live-maker` directory:

```bash
cd live-maker
```

### Standard Builds

* **Build Xorg ISO:**
  ```bash
  bash neko-builder.sh mate
  ```

* **Build Xlibre ISO:**
  ```bash
  bash neko-builder.sh matelibre
  ```

### Advanced Usage

The `neko-builder.sh` script supports multiple options:

* `./neko-builder.sh` — Runs in interactive mode.
* `./neko-builder.sh <desktop>` — Builds a specific desktop environment (e.g., `mate`, `matelibre`, `kde`).
* `./neko-builder.sh <desktop> -e "pkg..."` — Builds with extra specified packages.
* `./neko-builder.sh doble` — Builds both Xlibre and Xorg ISOs.
* `./neko-builder.sh doble-isor` — Builds both Rollibre and Rolling ISOs.

<RelatedLinks>

## See also <span class="related-links-kaomoji" aria-hidden="true">(˵ •̀ ᴗ - ˵ )</span> {#see-also}

- [Projects](/en/dev/projects/)
- [Neko Void OS Builder overview](/en/dev/projects/nekovoid-os-builder/)
- [Contributing](/dev/contributing/)

</RelatedLinks>
