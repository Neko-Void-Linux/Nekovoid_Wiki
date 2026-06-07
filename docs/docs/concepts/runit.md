# runit

> [!NOTE]
> This documentation is a direct excerpt from the [Gentoo Wiki's comprehensive guide on runit](https://wiki.gentoo.org/wiki/Runit), available under the [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) license. All information has been sourced from Gentoo to ensure accuracy.

runit is lightweight process supervision suite, originally inspired by daemontools that offers fast and reliable service management. It can be used as alternative to sysvinit or systemd, either by itself or alongside OpenRC. Additionally, runit can be employed as a PID 1 init system or as a supervision layer, managing services defined by OpenRC.

## Architecture

For more in-depth information about the process supervision aspects of runit, see daemontools-encore. A summary follows.

The process supervision features in runit are implemented by `runsv`, which functions similarly to daemontools' `supervise`. It takes the absolute or relative path of a service directory (or servicedir) as its argument. A valid runit service directory must contain at least an executable `run` file, and can optionally include a `down` file and a `log` subdirectory (or symlink). These components function like their daemontools equivalents. However, unlike `supervise`, if a `log` subdirectory is present, the same `runsv` process manages both the main `run` and `log/run` processes and handles the pipe connecting them internally. For example, if a service directory `S` contains a `log` subdirectory for logging, `ps` would show the `runsv S` process with two child processes. The logger is still controlled via `sv`, targeting `S/log` as the service.

Additionally, the service directory can include an executable `finish` file for cleanup tasks whenever the supervised process exits. `runsv` calls `finish` with two arguments: the exit code of the `run` process (or -1 if it didn’t exit normally) and the least significant byte of the exit status (per POSIX waitpid() behavior). For instance, the second argument will be 0 if `run` exited normally or the signal number if it was terminated by a signal. `runsv` enforces a 1-second delay before restarting `run` or invoking `finish` to prevent fast exit loops. A supervised process runs within the session of its `runsv` parent. To make it a session leader, use the `chpst -P` option inside `run`. If `runsv` receives SIGTERM, it acts as if the `sv exit` command was issued for the corresponding service.

Like `supervise`, `runsv` maintains control files in a `supervise` subdirectory. If a symlink to a `supervise` directory is found, `runsv` will follow it for control files. Additionally, `runsv` includes human-readable files in `supervise`—`stat` and `pid`—that store process ID and status information about the supervised process. Refer to the `runsv` man page for further details.

The `runsvdir` program supervises multiple processes in parallel using a scan directory (or scandir), similar to daemontools' `svscan`, serving as the root of the supervision tree. It monitors the scandir for changes (checking inode, device, or modification time at least every 5 seconds), launching new `runsv` processes for any newly detected servicedir, or restarting `runsv` for any terminated servicedir. It also sends SIGTERM to `runsv` processes whose corresponding servicedir is no longer present. Unlike `svscan`, `runsvdir` accepts a second argument that functions like `readproctitle` and specifies a rolling log buffer viewable in `ps` output. The first five characters remain static, while subsequent characters rotate as new log messages are added. A `-P` option allows `runsvdir` to make `runsv` children session leaders via `setsid()`. When `runsvdir` receives SIGHUP, it sends SIGTERM to its children before exiting. Refer to the `runsvdir` man page for more details.

`svlogd` is the logging program in the runit suite, analogous to daemontools' `multilog`, but with a different user interface. It accepts logging directory pathnames as arguments, which don't need to begin with `.` or `/`. To prepend a timestamp in TAI64N format to logged lines, invoke `svlogd` with the `-t` option. The `-tt` option adds a UTC timestamp (`YYYY-MM-DD_HH:MM:SS.xxxxx`), and `-ttt` uses ISO8601 format (`YYYY-MM-DDTHH:MM:SS.xxxxx`). Actions on log lines are defined in a `config` file in the log directory. Action lines starting with `s`, `n`, `!`, `+`, or `-` mirror those in `multilog`, with `+` in patterns meaning "one or more" of the next character. Patterns ignore timestamps. `svlogd` rotates logs on receiving SIGALRM and rereads `config` after receiving SIGHUP. For full details, consult the `svlogd` man page.

`chpst` is a chain-loading utility that alters a supervised process' execution environment. It includes options similar to daemontools' `envdir`, `envuidgid`, `pgrphack`, `setuidgid`, `setloc`, and `softlimit`, as well as runit-specific features. For example, `chpst -n` adjusts the process' nice value, `chpst -/` changes the root directory before executing the next command in the chain (`chroot()`), and `chpst -b newname` substitutes `argv[0]` to execute the next program with a new name. If invoked with names such as `envdir` or `setuidgid`, `chpst` behaves identically to those respective tools. For complete details, refer to the `chpst` man page.

`sv` is the control tool for runit-supervised processes. It accepts a subcommand and service directory pathnames as arguments. Pathnames are relative to `$SVDIR` or `/service` if `$SVDIR` is unset. Subcommands such as `up`, `down`, `once`, and `exit` map to daemontools' `svc -u`, `svc -d`, `svc -o`, and `svc -dx` respectively. The `status` subcommand provides similar functionality to `svstat`, displaying whether the supervised process is run or down, if its `finish` script is running, if the process is transitioning states, and additional metadata like PID, uptime, and paused or termination state. Other subcommands reliably send signals to supervised processes. For example, `sv alarm` sends SIGALRM to rotate logs, and `sv hup` sends SIGHUP to reload the log config. Refer to the `sv` man page for the full command set.

## Usage

### Basic Service Management
To manage services supervised by `runit`, you can use the `sv` command. The basic syntax is `sv <command> <service>`.

- **Check the status of a service:**
  ```bash
  sv status <service>
  ```
  This will display whether the service is running or down, its PID, and how long it has been in that state. You can also check the status of all services in the scan directory with `sv status *`.

- **Start a service:**
  ```bash
  sv up <service>
  ```

- **Stop a service:**
  ```bash
  sv down <service>
  ```
  This sends a SIGTERM signal to the process and stops it.

- **Restart a service:**
  ```bash
  sv restart <service>
  ```

- **Send a specific signal to a service:**
  For example, to send a SIGHUP (often used to reload configuration without stopping):
  ```bash
  sv hup <service>
  ```

### Managing Service Directories
Services are represented by directories containing at least an executable `run` script.
In typical systems, available services are stored in a repository (e.g., `/etc/sv`), and enabled services are symbolic links placed in the scan directory (e.g., `/var/service` or `/run/openrc/sv`).

- **Enable a service (start at boot):**
  Create a symbolic link from the service repository to the scan directory:
  ```bash
  ln -s /etc/sv/<service> /var/service/
  ```

- **Disable a service (do not start at boot):**
  Remove the symbolic link from the scan directory:
  ```bash
  rm /var/service/<service>
  ```
  *(Note: this will also stop the service if `runsvdir` detects the symlink removal).*

### Custom Process Control
You can customize how `runsv` reacts to `sv` commands by creating a `control` subdirectory within the service directory and placing single-character executable scripts inside it:
- `control/t`: Executed when `sv term` (or `sv down`) is used. Useful for graceful shutdown sequences.
- `control/u`: Executed when `sv up` is used, just before the main `run` script.
- `control/d`: Executed after sending SIGTERM/SIGCONT when `sv down` is used.

### The sv program's LSB-like interface
`sv` also accepts a set of subcommands resembling LSB init script actions:
- The `sv start`, `sv stop` and `sv shutdown` commands are equivalent to `sv -v up`, `sv -v down` and `sv -v exit`, respectively.
- The `sv force-stop` and `sv force-shutdown` commands, or equivalently, `sv Down` and `sv Exit` (with capital 'D' and 'E'), behave like `sv stop` and `sv shutdown`, respectively, except that if the action requested by the specified subcommand does not complete during the wait period, the supervised process is sent a SIGKILL signal on its expiry, as if an `sv kill` command had been used. The status line printed by `sv` is prepended with 'kill:' followed by a space in that case.
- The `sv reload` and `sv try-restart` commands are equivalent to `sv -v hup`, `sv -v term` respectively, except that the latter also sends a SIGCONT signal to the supervised process after the SIGTERM signal, as if an `sv cont` command had been used.
- The `sv restart` command is equivalent to `sv term` followed by `sv cont` followed by `sv -v up`. Therefore, unlike `sv try-restart`, `sv restart` cancels the 'do not restart' effect of any previous `sv once` command.
- The `sv force-reload` and `sv force-restart` commands behave like `sv try-restart` and `sv restart`, respectively, except that if the action requested by the specified subcommand does not complete during the wait period, the supervised process is sent a SIGKILL signal on its expiry, just like what happens with `sv force-stop` and `sv force-shutdown`. The `sv Term` command (with capital 'T') is equivalent to `sv force-reload`.

The `sv` program can be invoked with the name of a service directory (with any `argv[0]` substitution mechanism), in that case, also its exit code tries to comply with the LSB specification: it is 2 for usage errors and 151 (in the "reserved for application use" range) for fatal errors, instead of 100 in both cases, it is 0, 3 or 4, as appropriate, if the subcommand is status, and it is 1 on error (other than fatal errors) for other subcommands. This is useful if a symbolic link to `sv` representing a 'service name' is placed in directory `/etc/init.d`, resembling an LSB initialization script: executing this 'initialization script' with an action argument results in actually executing `sv` with a runit service directory of that name as an argument (e.g. `/etc/init.d/foo try-restart` will result in `sv try-restart foo`).

For the full description of `sv`'s functionality please consult the respective man page.

### The check file
The `sv` program accepts a `-v` option ('verbose') that makes it wait for the action requested by the specified subcommand to be completed, and then prints the resulting process' status, as if an `sv status` command had been used. The wait period's duration is the value of the `SVWAIT` environment variable (in seconds), or 7 seconds if `SVWAIT` is empty or unset. It can also be specified with a `-w` option passed to `sv`, which overrides the value of `SVWAIT`. If the requested action completes before the expiry of the wait period, the status line is prepended with 'ok:' followed by a space. Otherwise, the `sv` command exits with a nonzero code and the status line is prepended with 'timeout:' followed by a space.

For the `sv -v up` command, and, if the supervised process is wanted up after the action (i.e. no `sv once` command was used before), the `sv -v term` and `sv -v kill` commands, the action is considered complete if `runsv` considers the supervised process to be in 'run' state (i.e. `sv status` would print 'run:'). However, when the supervised process is executing a server program for example, it might not be ready to provide its service immediately after startup. Programs might do initialization work that could take some noticeable time before they are actually ready to serve, but it is impossible for the supervisor to know exactly how much. If there is some program-specific way to infer that it is ready, runit is able to take advantage of it by including an executable file named `check` in the service directory. When using one of the aforementioned subcommands, after `sv` determines that the supervised process is in 'run' state (via the `supervise/status` file), it executes the `check` file if present, and waits for it to exit. This file is assumed to contain code that polls for readiness, and must exit with a 0 code if it considers the supervised process to be ready, and with a nonzero code otherwise. Just like `run` or `finish`, the `check` file can have any format the kernel knows how to execute, and is normally a shell script. If `check` determines that the process is ready, `sv` will print an 'ok' status line and exit, otherwise it reexecutes `check` after waiting 420 milliseconds. In other words, during the wait period `sv` will periodically poll for readiness using `check`; if its exit code is never 0, on expiry of the wait period `sv` will print a 'timeout' status line and exit.
In addition, the `sv check` command can be used to poll for readiness (periodically during a wait period) by executing the `check` file, without changing the supervised process' state. The `sv status` command does not use the `check` file. For the full description of the `sv` program please consult the respective man page.

