# Instalando Neko Void

Cuando hayas booteado Neko Void desde tu memoria USB, Neko Void iniciará una sesión `LIVE`. El usuario por defecto es `anon` y la contraseña `voidlinux`.

> *[Imagen referencial de Neko Void en modo live aquí]*

## Instalando Neko Void en nuestra computadora

Para instalar Neko Void en nuestro equipo simplemente presionamos el icono del instalador que suele salir en el escritorio.

> *[Imagen referencial del instalador aquí]*

Seleccionamos nuestro idioma y continuamos con la instalación.

### Tipo de instalación

Aquí seleccionaremos nuestro tipo de instalación. Si deseas hacer una instalación limpia, simplemente seleccionamos **"Instalación limpia (borrar todo el disco)"**.

> *[Imagen referencial del tipo de instalación aquí]*

### Particiones

En **Particiones** seleccionamos nuestro disco duro. También podemos hacer un particionado manual para mayor control.

> *[Imagen referencial del particionado aquí]*

### Arranque

En **Arranque** simplemente seleccionamos nuestro disco para poder instalar el *bootloader*, por defecto se usa `GRUB`.

> *[Imagen referencial del arranque aquí]*

### Sistema

En **Sistema** configuramos nuestro nombre del equipo, nuestra zona horaria y el teclado.

> *[Imagen referencial del sistema aquí]*

### Usuarios

En **Usuarios** configuramos nuestro usuario, contraseña y la contraseña para `root` (se recomienda usar una distinta a la del usuario para mayor seguridad).

También podemos activar el inicio de sesión automático (**Auto-Login**).

> *[Imagen referencial de la configuración de usuarios aquí]*

### Escalador de privilegios

Como último paso elegimos nuestro escalador de privilegios, `doas` es el recomendado.

> *[Imagen referencial de seguridad aquí]*

Ya con todo listo podríamos iniciar nuestra instalación de Neko Void.

> *[Imagen referencial del instalador avisando que la instalación ha finalizado aquí]*

Cuando la instalación haya finalizado entonces removemos nuestra memoria USB y presionamos el botón **Reiniciar ahora**. Tu computadora se reiniciará y arrancará una instalación limpia de Neko Void.
