# Uso


### Modo Interactivo (TUI)

Solo necesitas llamar a la herramienta sin argumentos para abrir la interfaz:

```bash
kpm
```

  * Sigue las instrucciones en pantalla usando las teclas de flecha, `ENTER` (para confirmar) y `ESC` (para retroceder/salir). El flujo dinámico te permite seleccionar la app, extraerla y definir qué binario enlazar, todo de forma guiada.

-----

### Interfaz de Línea de Comandos (CLI)

Para operaciones rápidas no interactivas, `tm` soporta los siguientes comandos definidos (`clap`):

| Comando | Alias Corto | Descripción | Ejemplo de Uso |
| :--- | :--- | :--- | :--- |
| `list` | `-l`, `list-installed`| Lista las aplicaciones instaladas actualmente. | `kpm list` |
| `remove` | `-r` | Desinstala una o varias apps instaladas. | `kpm remove discord waterfox` |
| `install` | `-i` | Instala una o varias apps desde tarballs locales o **repositorios**. | `kpm install obsidian` |
| `update` | `-u` | Actualiza apps instaladas desde los repositorios. | `kpm update` o `kpm update obsidian` |
| `repo` | *(ninguno)* | Gestiona repositorios (oficiales, comunidad y personalizados). | `kpm repo list` |
| `help` | `-h`, `--help` | Muestra todas las opciones de ayuda del programa. | `kpm --help` |
| *(ninguno)* | `-V`, `--version` | Muestra la versión actual instalada. | `kpm -V` |
| `--update-bin` | *(ninguno)* | Actualiza el binario de Kore Package Manager a su última versión. | `kpm --update-bin` |

#### Instalación Directa (Múltiple y Repositorios)

Puedes instalar varias aplicaciones directamente escribiendo su nombre (si existen en los repositorios) o la ruta de un archivo `.tar.gz` o `.AppImage` local:

```bash
kpm install obsidian waterfox discord
# O usando el alias:
kpm -i discord
```

Si deseas instalar un archivo local específico y personalizar sus metadatos (esto aplica solo a instalaciones individuales), puedes usar las siguientes banderas:

```bash
kpm install "/path/to/app.AppImage" --app-name "NombreApp" --use-root "No" --category "Network"

kpm install "/path/to/app.tar.gz" --app-name "NombreApp" --use-root "No" --category "Network"
```

  * **--app-name (-a)**: Nombre que tendrá la aplicación en el sistema.
  * **--use-root (-u)**: Define si el acceso directo `.desktop` requerirá `pkexec` (superusuario).
  * **--category (-c)**: Categoría XDG para el menú de aplicaciones (`Utility`, `Network`, `Game`, etc).

#### Desinstalación Inteligente

Puedes borrar la carpeta, el binario y el archivo `.desktop` de una o más aplicaciones simultáneamente:

```bash
kpm remove nombre_app otra_app
# Ej. usando el alias:
kpm -r nombre_app
```

#### Gestión de Repositorios (`tm repo`)

El gestor ahora soporta repositorios para descargar e instalar apps con un solo comando.

  * `kpm repo list`: Lista la cantidad de paquetes disponibles por tipo (oficial, comunidad, usuario).
  * `kpm repo pkg-list`: Muestra la lista de todos los paquetes disponibles para instalar.
  * `kpm repo pkg-search <busqueda>`: Busca un paquete en todos los repositorios por nombre.
  * `kpm repo sync`: Sincroniza/actualiza la lista de repositorios oficiales y de la comunidad.
  * `kpm repo add <nombre> <nombre_pkg> <url> <categoria> [--requires-root]`: Añade un repositorio de terceros.
  * `kpm repo remove <nombre>`: Elimina un repositorio personalizado.

#### Autocompletado (Bash, Zsh, Fish)

Al instalar `kpm` mediante `install.sh`, los scripts de autocompletado para Bash, Zsh y Fish se configuran automáticamente de forma local en tu sistema, permitiéndote presionar `TAB` para completar comandos y banderas sin esfuerzo.

-----

