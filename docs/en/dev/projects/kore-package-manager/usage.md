# Usage


### Interactive Mode (TUI)
You just need to call the tool with no arguments to open the interface:
```bash
kpm
```
* Follow the on-screen instructions using your arrow keys, `ENTER` (to confirm), and `ESC` (to go back/exit). The dynamic flow allows you to select the app, extract it, and define the binary to link—all in a guided way.

---

### Command Line Interface (CLI)

For fast, non-interactive operations, `kpm` supports the following defined commands (`clap`):

| Command | Short Alias | Description | Usage Example |
| :--- | :--- | :--- | :--- |
| `list` | `-l`, `list-installed`| Lists currently installed applications. | `kpm list` |
| `remove` | `-r` | Uninstalls one or multiple installed apps. | `kpm remove discord waterfox` |
| `install` | `-i` | Installs one or multiple apps from local tarballs or **repositories**. | `kpm install obsidian` |
| `update` | `-u` | Updates installed apps from repositories. | `kpm update` or `kpm update obsidian` |
| `repo` | *(none)* | Manages repositories (official, community, and custom). | `kpm repo list` |
| `help` | `-h`, `--help` | Prints complete help options for the program. | `kpm --help` |
| *(none)* | `-V`, `--version` | Displays the current installation version. | `kpm -V` |
| `--update-bin` | *(none)* | Updates the Kore Package Manager binary to its latest version. | `kpm --update-bin` |

#### Direct Installation (Multiple & Repositories)
You can install multiple applications directly by typing their name (if they exist in the repositories) or the path of a local `.tar.gz` or `.AppImage` file:
```bash
kpm install obsidian waterfox discord
# Or using the alias:
kpm -i discord
```
If you want to install a specific local archive and customize its metadata (this applies to single installations only), you can use the following flags:
```bash
kpm install "/path/to/app.AppImage" --app-name "NombreApp" --use-root "No" --category "Network"

kpm install "/path/to/app.tar.gz" --app-name "NombreApp" --use-root "No" --category "Network"
```
* **--app-name (-a)**: Name the application will have in the system.
* **--use-root (-u)**: Defines whether the `.desktop` shortcut will require `pkexec` (superuser).
* **--category (-c)**: XDG Category for the applications menu (`Utility`, `Network`, `Game`, etc).

#### Smart Uninstallation
You can delete the folder, binary, and `.desktop` file of one or more applications simultaneously:
```bash
kpm remove app_name another_app
# E.g. using the alias:
kpm -r app_name
```

#### Repository Management (`kpm repo`)
The manager now supports repositories to download and install apps with a single command.
* `kpm repo list`: Lists the amount of available packages by type (official, community, user).
* `kpm repo pkg-list`: Shows the list of all packages available to install.
* `kpm repo pkg-search <query>`: Searches for a package in all repositories by name.
* `kpm repo sync`: Synchronizes/updates the list of official and community repositories.
* `kpm repo add <name> <pkg_name> <url> <category> [--requires-root]`: Adds a third-party repository.
* `kpm repo remove <name>`: Removes a custom repository.

#### Shell Completions (Bash, Zsh, Fish)
When installing `kpm` via `install.sh`, autocomplete scripts for Bash, Zsh, and Fish are automatically configured locally on your system, allowing you to press `TAB` to effortlessly complete commands and flags.


