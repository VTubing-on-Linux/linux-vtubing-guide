# UMU

It can be used as a CLI application to run games with Proton and automatically
apply quirks. This can also be used by other launchers, like Lutris.

::: tip
Lutris should automatically use UMU, so you don't need to install it.
:::

## Installation

::: code-group

```sh [Arch-based]
pacman -Syu umu-launcher
```

```sh [Nix]
nix shell nixpkgs#umu-launcher
```

:::

For other distros, check the
[releases](https://github.com/Open-Wine-Components/umu-launcher/releases).

## Usage

For simple usage:

```sh
export WINEPREFIX="$HOME/my/wineprefix"
export PROTONPATH="$HOME/.steam/steam/compatibilitytools.d/GE-Proton8-28"
umu-run "/path/to/game"
```

### Find and apply quirks

To see if a certain game has quirks available, check the
[umu-database](https://umu.openwinecomponents.org/index.php)

For example, Duet Night Abyss has 2 entries (as of now):

| Title            | UMU ID      | Store | Notes                | Protonfixes Script                                                                                            |
| ---------------- | ----------- | ----- | -------------------- | ------------------------------------------------------------------------------------------------------------- |
| Duet Night Abyss | umu-3950020 | egs   |                      | [umu-3950020](https://github.com/Open-Wine-Components/umu-protonfixes/blob/master/gamefixes-steam/3950020.py) |
| Duet Night Abyss | umu-3950020 | none  | Standalone Installer | [umu-3950020](https://github.com/Open-Wine-Components/umu-protonfixes/blob/master/gamefixes-steam/3950020.py) |

One is for EGS (Epic Game Store) and the other is for the standalone installer.
Note, however, that both uses to the same protonfixes script, so it shouldn't
matter which one you choose.

You just need these two things:

- UMU ID (specific to a game)
- Store

You can set them via environment variables.

```sh
# UMU ID
export GAMEID=umu-3950020

# If not set, it uses 'none'
export STORE=egs

# This is optional
export PROTONPATH="$HOME/.steam/steam/compatibilitytools.d/GE-Proton8-28"

# If not set, it uses /home/username/Games/umu/GAMEID
export WINEPREFIX=/path/to/wineprefix

umu-run /path/to/duet-night-abyss-launcher.exe
```
