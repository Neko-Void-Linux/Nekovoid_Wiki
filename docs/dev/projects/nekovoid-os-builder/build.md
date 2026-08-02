---
title: Build the Neko-Void ISO
description: Commands and options to build the Neko-Void Live ISO
---

# Build the Neko-Void ISO

## Prerequisites

Before building, complete the [setup](./) on the overview page: clone the repository and initialize the submodules. The build runs from the `live-maker` directory.

## Standard editions

Build the standard Neko-Void ISOs:

```bash
$ cd live-maker

# X.Org edition
$ bash neko-builder.sh xorg

# Xlibre edition
$ bash neko-builder.sh xlibre
```

## Rolling editions (latest kernel)

Build editions with the latest kernel:

```bash
$ cd live-maker

# Rolling X.Org edition
$ bash neko-builder.sh rolling

# Rolling Xlibre edition
$ bash neko-builder.sh rollibre
```

## Advanced usage

The `neko-builder.sh` script accepts arguments for interactive or customized builds:

```bash
$ ./neko-builder.sh                     # Interactive mode
$ ./neko-builder.sh <desktop>           # Build a specific desktop
$ ./neko-builder.sh <desktop> -e "pkg"  # Add extra packages
$ ./neko-builder.sh doble               # Build xlibre + xorg
$ ./neko-builder.sh doble-isor          # Build rollibre + rolling
```

## See also

- [Neko-Void OS Builder Overview](./) — setup and repository structure.

