---
title: musl
description: What musl is, why Neko-Void uses it, and how it differs from glibc
---

# musl

## Overview

musl is a C standard library. Every C program depends on it for memory allocation, file access, string handling, and other basic operations. Most Linux distributions use glibc; musl is a lighter alternative built around correctness, simplicity, and small size.

Neko-Void uses musl where it is viable. It keeps the system lean and stays out of the way.

## Why musl

| Aspect | musl | glibc |
|---|---|---|
| Size | Small | Large |
| Design | Simple, predictable | Feature-rich, complex |
| Memory use | Lower | Higher |
| Compatibility | Most software | Almost everything |
| Static linking | Clean, supported | Problematic |

The trade-off is compatibility. Some closed-source software and a few legacy programs expect glibc and need workarounds. The rest of the free software ecosystem runs on musl without issue.

## How to tell which library a system uses

```bash
$ ldd /bin/ls | grep -E 'musl|glibc|libc\.so'
```

A musl system shows a path like `/lib/ld-musl-x86_64.so.1`. A glibc system shows `libc.so.6` and `/lib64/ld-linux-x86-64.so.2`.

## Running glibc software on a musl system

When a program requires glibc, there are three common paths:

- **Flatpak.** The cleanest option. Flatpak bundles its own runtime, so glibc applications run without touching the base system. Neko-Void ships Flatpak support for this reason.
- **glibc chroot or container.** For heavier cases, a Void glibc chroot or a Distrobox container gives a full glibc environment.
- **Static binaries.** A static build carries no library dependency and runs anywhere.

Do not mix glibc libraries into a musl base system. It is fragile and unsupported.
