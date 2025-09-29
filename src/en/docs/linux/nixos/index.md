# NixOS

[NixOS](https://nixos.org/) is an immutable Linux distribution that allows the
user to configure their _whole_ system in a **reproducible, declarative and
reliable** way.

That means your system's packages, systemd services, udev rules, display
managers, desktop environments, etc, are **all declared through configuration
files**. This makes it way easier to reinstall your system or to configure a
new machine.

All the configuration files are written using a [functional
language](https://en.wikipedia.org/wiki/Functional_programming) called Nix, so
it's essential for a NixOS user to understand how to write in Nix.

::: warning
It comes without saying that NixOS is not meant for regular users, but there's
nothing stopping you from trying!
:::

::: info
This guide assumes [flakes](#Flakes) are enabled.
:::

## Reproducible

All packages are built in isolation from each other and have their dependencies
explicitely declared. If it works on one machine, it _should_ work on another.

::: details Example of a pseudo application packaged with nix:

```nix
# inputs
{
    stdenv,
    fetchFromGitHub,
    fetchpatch,

    deps1,
    deps2,
}:

# "Make" derivation (package)
stdenv.mkDerivation {
  pname = "my-program";
  version = "1.0.3";

  # Source files
  src = fetchFromGitHub {
    owner = "h-banii";
    repo = "my-program";
    rev = "fc8c739334e3fd52af9a3fece075a59361dabb83";
    hash = "sha256-79f2D6pz0+wlTSP6bfyqNx5uFWh+ujTRne6JdCwEkQU=";
  };

  # Apply patches
  patches = [
    ./some-local.patch

    (fetchpatch {
      url = "https://github.com/h-banii/my-program/pull/1.patch";
      hash = "sha256-JMR3tpnhs8p9FHYaPfCX6IEBAmuq5VA7muuFGh8O8f4=";
    })
  ];

  # Build tools, compilers, nix hooks, etc.
  nativeBuildInputs = [
    pkg-config
  ];

  # Dependencies
  buildInputs = [
    deps1
    deps2
  ];

  # Metadata
  meta = {
    license = lib.licenses.mit;
    description = "My pseudo program";
    mainProgram = "my-program"; # name of the binary, used by `nix run`
  };
}
```

:::

:::: details Reusability on multiple machines
You technically can't just "copy your configuration files to another machine"
and expect it to work unless the machines have **identical hardware**.

Also, most of the time you wouldn't want them to be the exact same. For
example, if you have a desktop computer for gaming and a potato laptop for
studying, it wouldn't make sense to install the same gaming-related software on
the potato laptop (in most cases). The configuration has to be different.

To avoid that kind of problem, I highly recommend implementing your nix
settings through a [module](#Modules). So instead of just enabling NixOS'
default options directly, you should create your own custom module with your
custom options that acts as a layer of abstraction between your configuration
and the default options. This is especially helpful when there are breaking
changes to NixOS default options, so you can just fix your module instead of
fixing ALL of your machines' configurations.

That way you can import your module as an input and enable the options you need
for each machine:

::: code-group

```nix [module.nix]
{
  config,
  pkgs,
  lib,
  ...
}:
let
  cfg = config.my-options;
  inherit (lib) mkEnableOption mkMerge mkIf;
in
{
  imports = [
    # You can also import options from other files to have a multi-file module
  ];

  options.my-options = {
    obs.enable = mkEnableOption "OBS with my favorite plugins";
    gaming.enable = mkEnableOption "gaming related software and quirks";
    neovim.enable = mkEnableOption "neovim and make it the default editor";
  };

  config = mkMerge [
    (mkIf cfg.obs.enable {
      programs.obgs = {
        enable = true;
      };
    })
    (mkIf cfg.gaming.enable {
      programs.steam = {
        enable = true;
      };

      environment.systemPackages = with pkgs; [
        lutris
        heroic
        umu-launcher
        osu-lazer-bin
      ];
    })
    (mkIf cfg.neovim.enable {
      programs.neovim = {
        enable = true;
        defaultEditor = true;
      };
    })
  ];
}
```

```nix [Machine A]
# Suppose this is my streaming machine

imports = [
  ./my-module.nix # module where `my-module-options` is defined
];

my-options = {
  obs.enable = true;      # installs OBS with all my plugins
  gaming.enable = true;   # installs steam, wine, etc.
  neovim.enable = true;
};

# Some hardware-specific configuration
hardware.graphics.extraPackages = with pkgs; [ rocmPackages.clr.icd ];
```

```nix [Machine B]
# Suppose this is my potato laptop

imports = [
  ./my-module.nix
];

my-options = {
  # We don't need gaming options nor OBS in this machine, enable just neovim
  neovim.enable = true;
};

# Some hardware-specific configuration hardware.graphics.extraPackages = with
hardware.graphics.extraPackages = with pkgs; [ mesa.opencl ];
```

:::

Note that you don't necessarily need to use modules to get the same kind of
modularity, you could technically have your raw configuration on separate files
and import it on the machines in which you need them enabled.

```nix
imports = [
  ./obs.nix
  ./streaming.nix
  ./neovim.nix
];
```

The module approach is better because you only need to import it once.

::::

::: tip
If you want to see real world examples of software packaged with nix, check out
the [`nixpkgs`](https://github.com/NixOS/nixpkgs) repository. It contains a
collection of over 120,000 applications packaged with nix, as well as the
implementation of NixOS.

Anytime you need to package something with nix, try looking for a similar
program that was already packaged on nixpkgs, so you can use it as reference.

See: https://search.nixos.org/packages
:::

## Imperative x Declarative

An imperative package manager requires the user to _imperatively_ install
packages through a command or button. For example:

```sh
pacman -Syu foobar
```

Nix being _declarative_ means your system's packages need to be **explicitely
declared in a configuration file** in order to be installed.

```nix
system.environmentPackages = with pkgs; [
    foobar
    terminal

    obs-studio # This is not needed if you set programs.obs-studio.enable
];

# Some packages, like obs-studio, have extra options:
programs.obs-studio = {
    # This makes the package available in the system
    enable = true;

    plugins = with pkgs.obs-studio-plugins; [
        wlrobs
        obs-multi-rtmp
        obs-vaapi
        obs-pipewire-audio-capture
        obs-tuna
        obs-composite-blur
        obs-text-pthread
        obs-vkcapture
    ];

    # This adds the v4l2loopback kernel module
    # and creates the video device for you.
    #
    # No need to manually configure it.
    enableVirtualCamera = true;
};
```

::: tip
It's also possible to temporarily run a program without installing it globally
in the system:

```sh
nix run nixpkgs#obs-studio
```

Or create a temporary shell environment with all the packages you need:

```sh
$ nix shell nixpkgs#{rustc,python3}
$ rustc --version
rustc 1.89.0 (29483883e 2025-08-04) (built from a source tarball)
$ python3 --version
Python 3.13.6
```

Packages installed that way are cached in the nix store until the user runs the
garbage collector

```sh
nix-collect-garbarge
```

:::

## Reliable

**Packages cannot break other packages**. Packages can depend on conflicting
versions of the same library and co-exist in the nix store without affecting
one another.

You can even mix stable and unstable packages by using differente nixpkgs
revisions, like `nixos-unstable` and `25.05` (stable).

```nix
{ pkgs, nixpkgs-stable, nixpkgs-unstable, minkpkgs, ... }: let
    inherit (pkgs.stdenv.hostPlatform) system;

    stablePkgs = nixpkgs-stable.legacyPackages.${system};

    unstablePkgs = nixpkgs-unstable.legacyPackages.${system};

    # You can get packages from repositories other than nixpkgs
    #
    # It's somewhat equivalent to the AUR, but the repository can be hosted
    # localy or on any git hosting service like github, gitlab, etc.
    #
    # This is useful if you need packages that aren't available in nixpkgs
    mink = minkpkgs.legacyPackages.${system};
in {
    system.environmentPackages = [
        # use the default nixpkgs revision
        pkgs.firefox

        # Use obs-studio from an older revision of nixpkgs
        stablePkgs.obs-studio

        # Use nvim from a newer revision of nixpkgs
        unstablePkgs.nvim

        # use clip-studio-paint from minkpkgs
        mink.clip-studio-paint-v1
    ];
}
```

::: info
Note that
[`nixpkgs.legacyPackages`](https://github.com/NixOS/nixpkgs/blob/bd8736b95b1a9170a7dcfd1c39e6bb3348f9c357/flake.nix#L194-L202)
doesn't have the meaning you're probably thinking, it's just the name of the
output used to expose packages in a way that avoids checks. It has nothing to
do with the age of the packages.
:::

::: warning
It's technically possible to install packages imperatively with `nix-env`,
however it's **highly** disencouraged.
:::

::: details Stable x Rolling Release
You may have noticed by now, but NixOS isn't inherently stable or rolling
release, it all depends on what revision of nixpkgs you use.

You can have a stable system with some bleeding edge packages or a bleeding
edge system with some stable packages. You can mix and match based on your
needs.

Note, however, that you might have problems with graphical applications that
were built against a version of `mesa` incompatible with the one installed in
your system. This happens with packages in nixpkgs older than
[`25.05`](https://nixos.org/manual/nixos/stable/release-notes#sec-release-25.05).
:::

## Updating your system

Every time the user updates their system, a "generation" is created alongside
an entry for it in the boot loader. So if you want to boot into a previous
generation, you can do so through the boot loader.

```sh
# update nixpkgs revisions pinned in flake.lock (using flakes)
nix flake update /etc/nixos

# Build current configuration declared in `/etc/nixos`
# (it'll see we updated the lockfile and rebuild the system)
#
# This immediately switches to this new generation and
# creates an entry for it in the boot loader
nixos-rebuild switch

# Rollback to the previous generation
nixos-rebuild --rollback switch
```

:::: details Some other useful subcommands for `nixos-rebuild`

::: info `nixos-rebuild test`

Build and switch to it immediately, but don't create an entry in the boot loader

- If you added packages, they'll be immediately available.
- The next boot will go to the previous generation
  :::

::: info `nixos-rebuild boot`

Build and don't switch to it, just create an entry in the boot loader

- If you added packages, they'll won't be available until the next boot.
- The next boot will go to the new generation
  :::

::: info `nixos-rebuild build-vm`

Build a qemu image so you can try it in a virtual machine
:::

Check the manpage `nixos-rebuild(8)` for more.
::::

## Garbage collection

In order to delete previous generations and free some space in the nix store,
you need to run the garbage collector from time to time.

```sh
# the -d flag means "Delete all old generations of profiles."
sudo nix-collect-garbarge -d
```

::: info `/nix/store`
The **nix store** is where all packages, dev shells, configuration files, etc,
built by nix are stored.
:::

::: tip
You can automate this process in NixOS through the `nix.gc` option

```nix
nix.gc = {
  automatic = true;
  dates = "weekly";
  options = "--delete-older-than 30d";
};
```

Reference: https://wiki.nixos.org/wiki/Storage_optimization#Automation
:::

::: warning
Running `nix-collect-garbage -d` without super user privileges will **NOT**
delete system generations, only user-specific generations, like those created
by home-manager.
:::

## Flakes

Nix Flakes are an experimental feature to improve nix. It makes it easier to
expose packages, dev-environments, formatters, system configurations, etc, and
allows for pinning dependencies.

Using NixOS with flakes means `/etc/nixos/flake.nix` is the entry point of your
system's configuration and each nixpkgs revision is an input pinned in the
lockfile `/etc/nixos/flake.lock`

```nix
{
    inputs = {
        nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
        nixpkgs-stable.url = "github:NixOS/nixpkgs/25.05";

        minkpkgs = {
          url = "github:h-banii/minkpkgs";
          inputs.nixpkgs.follows = "nixpkgs";
        };
    };
}
```

That means updating your system is as easy as updating your system's flake
inputs and then rebuilding.

```sh
nix flake update /etc/nixos
nixos-rebuild switch
```

::: info
The lockfile `flake.lock` is automatically generated and shouldn't be modified
manually unless you know what you're doing.

The command `nix flake update` updates all inputs in the lockfile, but you can
also select a specific input to update: `nix flake update minkpkgs`.
:::

## Modules

::: warning
Under construction!
:::

## Home Manager

::: warning
Under construction!
:::

## Downsides

Using NixOS as a daily driver is feasible, but it has a few downsides:

::: info **Not all programs are packaged in nixpkgs**
You'll eventually have to package
something yourself. Even if you know nix well, it'll still inevitably waste a
bit of your time.
:::

::: info **Non-FHS compliant**
Shebangs that expect a binary to be at a certain path won't work
(`#!/usr/bin/bash`) and it makes it impossible to run binaries without
patching. It's not hard to fix shebangs (`#!/usr/bin/env bash`) or patch
binaries ([`patchelf`](https://wiki.nixos.org/wiki/Packaging/Binaries)), but it
wastes a bit of time.

There are also some games that expect FHS, so you need to use
[`steam-rum`](https://wiki.nixos.org/wiki/Steam#FHS_environment_only)
:::

## Useful Resources

For installing NixOS:

- Official manual: https://nixos.org/manual/nixos/stable/index.html#ch-installation
- Companion guide: https://wiki.nixos.org/wiki/NixOS_Installation_Guide

For learning nix and nixpkgs:

- Unofficial NixOS & Flakes Book: https://nixos-and-flakes.thiscute.world/
- Nix Pills: https://nixos.org/guides/nix-pills/

When using NixOS on a daily basis, this is essential:

- Search for packages: https://search.nixos.org/packages
- Search for NixOS options: https://search.nixos.org/options
- Official wiki: https://wiki.nixos.org/wiki/NixOS_Wiki

::: info
NixOS can be installed through a graphical calamares installer, however I
highly recommend against it. You'll learn way more with the regular command
line installation.
:::
