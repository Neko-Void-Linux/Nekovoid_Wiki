# Architecture & Structure

## Project Structure

- `include/`: Contains `neko_installer.h` with core data structures and function prototypes.
- `src/core/`: Application logic and installation steps.
    - `main.c`: Entry point and GTK initialization.
    - `installer.c`: Coordination of the installation thread and logging.
    - `installer_steps.c`: Individual steps (partitioning, formatting, copying files, secondary configuration).
    - `partition_utils.c`: Logic for disk discovery and partition mapping.
    - `utils.c`: Generic helpers (shell execution, UUID retrieval, EFI detection).
- `src/ui/`: GTK+ 3.0 user interface components.
    - `ui.c`: Main window development and tab structure.
    - `ui_partition.c`: Partition selection and manual partitioning dialogs.
    - `ui_callbacks.c`: Event handlers for navigation and user input.

<section class="related-links">

## See also <span class="related-links-kaomoji" aria-hidden="true">(˵ •̀ ᴗ - ˵ )</span> {#see-also}

- [Projects](/dev/projects/)
- [Kasha overview](/dev/projects/kasha-installer/)
- [Build Kasha](/dev/projects/kasha-installer/build)

</section>

