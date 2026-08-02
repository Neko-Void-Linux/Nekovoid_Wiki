---
title: musl
description: What musl is, why Neko-Void uses it, and how it differs from glibc
---

# musl

## Overview

musl is a C standard library, the layer that every C program uses for basic operations: memory allocation, file access, string handling, and more. Most Linux distributions use **glibc**; musl is a lighter alternative focused on correctness, simplicity, and small size.

Neko-Void prefers musl where it is viable. It is one of the technical choices that keeps the system lean, in line with the project's principle of freedom and minimalism.

## Why musl

| Aspect | musl | glibc |
|---|---|---|
| Size | Small | Large |
| Design | Simple, predictable | Feature-rich, complex |
| Memory use | Lower | Higher |
| Compatibility | Most software | Almost everything |
| Static linking | Clean, supported | Problematic |

musl's main trade-off is compatibility: some closed-source software and a few legacy programs expect glibc and may need workarounds. For the rest — which is most of the free software ecosystem — musl works without issue.

## How to tell which library a system uses

Run:

```bash
$ ldd /bin/ls | grep -E 'musl|glibc|libc\.so'
```

A musl system shows a path like `/lib/ld-musl-x86_64.so.1`. A glibc system shows `libc.so.6` and `/lib64/ld-linux-x86-64.so.2`.

## Running glibc software on a musl system

When a program requires glibc, you have options:

- **Flatpak.** The cleanest path. Flatpak bundles its own runtime, so glibc applications run inside a Flatpak without touching the base system. Neko-Void ships Flatpak support for this reason.
- **glibc chroot or container.** For heavier cases, a Void glibc chroot or a Distrobox container provides a full glibc environment.
- **Static binaries.** When the software offers a static build, it carries no library dependency and runs anywhere.

Avoid mixing glibc libraries into a musl base system. It is fragile and unsupported.

## See also

- [runit](./runit) — the init system Neko-Void uses, part of the same lean philosophy.
- Void Linux documentation on [musl](https://docs.voidlinux.org/config/musl.html).
