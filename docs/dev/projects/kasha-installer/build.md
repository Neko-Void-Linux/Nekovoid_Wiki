# Build & Run

## Compilation and Dependencies

### Dependencies

Ensure you have the following installed:
- `gcc`
- `make`
- `pkg-config`
- `gtk+-3.0` development headers
- If your system requires LUKS: `bash`, `grub`, `xxd`, and `sed`.
- If you use Devuan or Arch, use the universal branch.

> **Changing the Logo:** If you want to change the logo in the installer, first convert your image logo with xxd:
> ```bash
> xxd -i logo.png > include/logo.h
> ```
> And replace `logo.h` in the project.

### Build Instructions

To compile the installer for the default environment:

```bash
make
```

For **other distributions** (ARTIX/ARCH, DEVUAN/DEBIAN, ETC...):

```bash
make universal
```

To clean the build artifacts:

```bash
make clean
```

## Running the Installer

The installer requires root privileges to manipulate disks, format partitions, and mount filesystems.

```bash
sudo ./neko_installer
```

Alternatively, use the convenience rule:

```bash
make run
```
