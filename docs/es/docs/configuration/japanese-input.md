---
title: Configuración de entrada en japonés (fcitx5 + Mozc)
description: Guía de instalación y configuración de fcitx5 y Mozc para escribir en japonés en Neko Void Linux
---

# Entrada en japonés (fcitx5 + Mozc)

Esta guía explica paso a paso cómo habilitar y configurar la entrada de texto en japonés en **Neko Void Linux** (basado en Void Linux con `xbps`) utilizando **fcitx5** y el motor de entrada **Mozc**.

::: tip Guía bilingüe / 日本語の手順
Esta página contiene la explicación completa en español y al final la [versión original en japonés](#日本語入力（fcitx5-mozc）のセットアップ手順).
:::

## 1. Instalación de paquetes necesarios

Selecciona la pestaña según tu herramienta de elevación de privilegios (`doas` es la recomendada en Neko Void, o `sudo`):

::: code-group

```bash [doas (Recomendado)]
doas xbps-install -S fcitx5 fcitx5-configtool fcitx5-qt fcitx5-mozc
```

```bash [sudo]
sudo xbps-install -S fcitx5 fcitx5-configtool fcitx5-qt fcitx5-mozc
```

:::

::: tip Compatibilidad con aplicaciones GTK
Si utilizas aplicaciones basadas en GTK (como Firefox, LibreOffice o aplicaciones de MATE/XFCE), se recomienda instalar también el módulo `fcitx5-gtk`:
```bash
doas xbps-install -S fcitx5-gtk
# o con sudo:
sudo xbps-install -S fcitx5-gtk
```
:::

---

## 2. Configuración de variables de entorno

Para que las aplicaciones X11 reconozcan a `fcitx5` como el método de entrada predeterminado, debemos definir las variables de entorno en el archivo `~/.xprofile` de tu carpeta de usuario.

1. Abre o crea el archivo con tu editor de texto favorito:
```bash
nano ~/.xprofile
```

2. Añade las siguientes líneas al final del archivo y guarda los cambios:
```bash
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS=@im=fcitx
```

::: tip Inicio automático en gestores de ventanas (Autostart)
Si tu entorno de escritorio o gestor de ventanas (por ejemplo, IceWM, bspwm o dwm) no arranca el demonio de `fcitx5` automáticamente al iniciar sesión, puedes añadir la siguiente línea a tu `~/.xprofile` o script de autostart:
```bash
fcitx5 -d &
```
:::

---

## 3. Configurar el método de entrada Mozc

1. **Cierra sesión y vuelve a iniciarla** (o reinicia el equipo) para que el entorno cargue las nuevas variables de `~/.xprofile`.
2. Ejecuta la herramienta de configuración gráfica de fcitx5:
```bash
fcitx5-configtool
```
3. En la pestaña de métodos de entrada (*Input Method*), haz clic en **Añadir (+)**, busca **Mozc** y agrégalo a la lista de teclados activos.
4. Por defecto, puedes alternar entre la entrada en inglés/español y japonés usando la combinación <kbd>Ctrl</kbd> + <kbd>Espacio</kbd> o la tecla <kbd>Zenkaku/Hankaku</kbd>.

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
