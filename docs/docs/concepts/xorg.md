---
title: Xorg
description: X11 display server in Neko Void, session startup, packages, and device configuration
---

# Xorg (X11)

X.Org Server (commonly known as Xorg Server or simply Xorg) is the display server implementation of the X Window System (X11) maintained by the X.Org Foundation, and is one of the most widely used and stable display servers in the Linux ecosystem. Its ubiquity has made it a long-standing standard for graphical applications, offering widespread compatibility across distributions.

## Starting an X Session

The `Xorg` command is usually not invoked directly by the user. Instead, the X server is launched either through a graphical display manager or manually via `xinit`.

To launch a window manager or desktop environment using `xinit`, add the corresponding execution command to your `~/.xinitrc` file:

```bash
exec /bin/i3
```

> [!NOTE]
> If your graphical environment relies on inter-process communication services (such as audio volume control applets, tray icons, or desktop notifications), launch the session with D-Bus by prepending `dbus-run-session`:
>
> ```bash
> exec dbus-run-session /bin/i3
> ```

In most cases, configuring `xinit` manually is not necessary, as the chosen Neko Void edition typically comes with a pre-installed display manager enabled by default via runit.

> [!TIP] Package Options in Void Linux
> - **Full meta-package (`xorg`)**: The Void repositories provide the `xorg` meta-package, which automatically installs the base display server alongside common video drivers and essential utilities.
> - **Minimalist alternative (`xorg-minimal`)**: For a lean, stripped-down setup, you can install `xorg-minimal`. Keep in mind that this package omits font sets; you must install `xorg-fonts` as well to prevent black screens, unreadable text, or rendering errors in your graphical environment.

## Generating xorg.conf

Xorg can be configured globally through `/etc/X11/xorg.conf` or `/etc/xorg.conf`.

If you need to generate a baseline configuration file, run:

```bash
Xorg :0 -configure
```

This generates `xorg.conf.new` in the `/root/` directory, which you can inspect and move to `/etc/xorg.conf` or `/etc/X11/xorg.conf`.

## Modular Configuration (xorg.conf.d)

On modern systems, Xorg automatically detects most video hardware and input devices without requiring manual intervention. However, you can create modular configuration files inside `/etc/X11/xorg.conf.d/` to enforce specific options.

### Keyboard Configuration with libinput

To configure input device behavior, using the `libinput` driver is recommended. The example below configures a Spanish keyboard layout in `/etc/X11/xorg.conf.d/30-keyboard.conf`:

```ini
Section "InputClass"
    Identifier "keyboard-all"
    Driver "libinput"
    MatchIsKeyboard "on"
    Option "XkbLayout" "es"
EndSection
```

For more configuration examples and options, refer to the [Fedora Project Input device configuration reference](https://fedoraproject.org/wiki/Input_device_configuration#xorg.conf.d).
