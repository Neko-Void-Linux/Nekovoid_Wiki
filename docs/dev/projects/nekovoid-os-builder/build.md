# Build Options

## Normal Build

To build the standard Neko-Void ISOs, use the following commands:

* **Build X.Org Edition:**
  ```bash
  cd live-maker && bash neko-builder.sh xorg
  ```

* **Build Xlibre Edition:**
  ```bash
  cd live-maker && bash neko-builder.sh xlibre
  ```

## Rolling Build (Latest Kernel)

To build rolling editions with the latest kernel:

* **Build Rolling X.Org Edition:**
  ```bash
  cd live-maker && bash neko-builder.sh rolling
  ```

* **Build Rolling Xlibre Edition:**
  ```bash
  cd live-maker && bash neko-builder.sh rollibre
  ```

## Advanced Usage

The `neko-builder.sh` script supports various arguments for interactive or customized builds:

```bash
# NekoVoid Live ISO Builder - Nonfree Edition

./neko-builder.sh                 # Interactive mode
./neko-builder.sh <desktop>       # Build a specific desktop
./neko-builder.sh <desktop> -e "pkg..." # With extra packages
./neko-builder.sh doble           # Build xlibre + xorg
./neko-builder.sh doble-isor      # Build rollibre + rolling
```
