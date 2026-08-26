# Installing Neko Void

Once you have booted Neko Void from your USB drive, Neko Void will start a `LIVE` session. The default user is `anon` and the password is `voidlinux`.

> *[Reference image of Neko Void in live mode here]*

## Installing Neko Void on our computer

To install Neko Void on our computer, simply press the installer icon that usually appears on the desktop.

> *[Reference image of the installer here]*

Select our language and continue with the installation.

### Installation Type

Here we will select our installation type. If you want to do a clean installation, simply select **"Clean installation (erase entire disk)"**.

> *[Reference image of installation type here]*

### Partitions

In **Partitions** we select our hard drive. We can also do manual partitioning for greater control.

> *[Reference image of partitioning here]*

### Boot

In **Boot** we simply select our disk to install the *bootloader*; `GRUB` is used by default.

> *[Reference image of bootloader here]*

### System

In **System** we configure our computer name, timezone and keyboard.

> *[Reference image of system settings here]*

### Users

In **Users** we configure our user, password and the root password (it is recommended to use a different one from the user for greater security).

We can also enable automatic login (**Auto-Login**).

> *[Reference image of user configuration here]*

### Privilege Escalator

As the last step we choose our privilege escalator; `doas` is recommended.

> *[Reference image of security settings here]*

With everything ready we can start our installation of Neko Void.

> *[Reference image of the installer showing installation finished here]*

When the installation is finished, remove our USB drive and press the **Restart Now** button. Your computer will reboot and start a clean installation of Neko Void.
