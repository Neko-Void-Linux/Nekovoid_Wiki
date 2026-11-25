---
title: Japanese Input Setup (fcitx5 + Mozc)
description: Complete guide for setting up Japanese keyboard input on Neko Void Linux using fcitx5 and Mozc
---

# Japanese Input Setup (fcitx5 + Mozc)

This guide provides step-by-step instructions for enabling Japanese keyboard input on **Neko Void Linux** (Void Linux environment with `xbps`) using **fcitx5** and the **Mozc** engine.

::: tip Bilingual Guide / 日本語の手順
This page includes both the English guide below and the [original Japanese guide](#日本語入力（fcitx5-mozc）のセットアップ手順) at the bottom.
:::

## 1. Installing Required Packages

Select the command corresponding to your privilege escalation tool (`doas` is recommended on Neko Void, or `sudo`):

::: code-group

```bash [doas (Recommended)]
doas xbps-install -S fcitx5 fcitx5-configtool fcitx5-qt fcitx5-mozc
```

```bash [sudo]
sudo xbps-install -S fcitx5 fcitx5-configtool fcitx5-qt fcitx5-mozc
```

:::

::: tip GTK Application Compatibility
To ensure seamless operation with GTK-based applications (such as Firefox, LibreOffice, or MATE/XFCE native apps), it is recommended to also install `fcitx5-gtk`:
```bash
doas xbps-install -S fcitx5-gtk
# or with sudo:
sudo xbps-install -S fcitx5-gtk
```
:::

---

## 2. Configuring Environment Variables

To allow X11 sessions and GUI toolkits to recognize `fcitx5` as the active input method, add the required environment variables to `~/.xprofile` in your home directory.

1. Open the configuration file in a text editor:
```bash
nano ~/.xprofile
```

2. Append the following three lines to the end of the file and save:
```bash
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS=@im=fcitx
```

::: tip Window Managers & Autostart
If you are using a lightweight window manager (such as IceWM, bspwm, or dwm) that does not automatically launch input method daemons upon login, add `fcitx5 -d &` to your desktop autostart script or to your `~/.xprofile`:
```bash
fcitx5 -d &
```
:::

---

## 3. Configuring the Mozc Input Method

1. **Log out and log back in** (or restart your session) to load the new environment variables from `~/.xprofile`.
2. Open the graphical configuration tool:
```bash
fcitx5-configtool
```
3. In the **Input Method** tab, click **Add (+)**, search for **Mozc**, and add it to your active input methods list.
4. By default, you can toggle between your default layout and Japanese input using <kbd>Ctrl</kbd> + <kbd>Space</kbd> or the <kbd>Zenkaku/Hankaku</kbd> key on Japanese keyboards.

---

## 日本語入力（fcitx5 + Mozc）のセットアップ手順

Void Linux 環境で日本語キーボード入力を有効にするためのインストールおよび環境変数の設定手順です。

### 1. 必要なパッケージのインストール

お使いの権限昇格ツール（`sudo` または `doas`）に合わせて、以下のいずれかのコマンドを実行してください。

**`doas` を使用する場合（推奨）：**
```bash
doas xbps-install -S fcitx5 fcitx5-configtool fcitx5-qt fcitx5-mozc
```

**`sudo` を使用する場合：**
```bash
sudo xbps-install -S fcitx5 fcitx5-configtool fcitx5-qt fcitx5-mozc
```

> ※ GTK ベースのアプリケーション（Firefox や MATE アプリなど）でも問題なく動作させる場合は、`fcitx5-gtk` もあわせてインストールすることをおすすめします。

---

### 2. 環境変数の設定

X11 セッション起動時に `fcitx5` がインプットメソッドとして認識されるよう、ホームディレクトリの `.xprofile` に設定を追記します。

1. 設定ファイルをエディタで開きます：
```bash
nano ~/.xprofile
```

2. ファイルの末尾に以下の3行を追記して保存します：
```bash
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS=@im=fcitx
```

::: tip ウィンドウマネージャの自動起動設定（Autostart）
IceWM、bspwm、dwm などのウィンドウマネージャをご利用で、セッション開始時に `fcitx5` が自動的に常駐しない場合は、`~/.xprofile` やセッションの自動起動スクリプトに以下を追記してください：
```bash
fcitx5 -d &
```
:::

3. 設定を反映させるため、一度ログアウトして再ログインしてください。その後、`fcitx5-configtool` を起動して入力メソッドに **Mozc** を追加すれば完了です。
