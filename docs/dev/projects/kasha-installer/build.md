---
title: Kasha Build
description: How to compile and run the Kasha installer
---

# Kasha Build

## Dependencies

Install the following before building:

- `gcc`
- `make`
- `pkg-config`
- `gtk+-3.0` development headers
- For LUKS support: `bash`, `grub`, `xxd`, and `sed`

On Devuan or Arch, use the universal branch of the project.

## Build

Compile for the default environment:

```bash
$ make
```

For other distributions (Artix, Arch, Devuan, Debian):

```bash
$ make universal
```

Clean the build artifacts:

```bash
$ make clean
```

## Changing the logo

To replace the installer logo, convert the image with `xxd` and drop it in the project:

```bash
$ xxd -i logo.png > include/logo.h
```

Then replace `logo.h` in the source tree.

## Run

The installer needs root to manipulate disks, format partitions, and mount filesystems:

```bash
# ./neko_installer
```

Or use the convenience rule:

```bash
# make run
```

## See also

- [Kasha Overview](./) — what Kasha is and its features.
- [Architecture](./architecture) — how Kasha is structured.

