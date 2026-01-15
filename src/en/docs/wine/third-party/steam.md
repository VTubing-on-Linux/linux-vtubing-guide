# Steam

Steam uses a _fork_ of Wine called
[Proton](https://github.com/ValveSoftware/Proton), it includes a few patches to
fix and optimize some games. There also several forks of Proton made by users
that include even more fixes, one of them being
[Proton-GE](https://github.com/GloriousEggroll/proton-ge-custom), made by
GloriousEggroll.

You can choose which Proton version to use through the game's **properties**
menu.

![Steam settings page to set the compat tool](/wine/steam-compat-tool.png)

If you need to install Proton forks to fix some game, you can use third party
tools:

- [ProtonPlus](https://github.com/Vysp3r/ProtonPlus)
- [ProtonUp-Qt](https://davidotek.github.io/protonup-qt/)

Or install it manually:

- Download some Proton fork, for example: [Proton-GE](https://github.com/GloriousEggroll/proton-ge-custom/releases)
- Extract it into `~/.steam/steam/compatibilitytools.d/`
- Restart Steam

It should look something like this:

```sh
~/.steam/steam/compatibilitytools.d
├── LegacyRuntime
│   ├── compatibilitytool.vdf
│   ├── scout-legacy
│   └── toolmanifest.vdf
└── Some-Proton-fork
    ├── compatibilitytool.vdf
    ├── filelock.py
    ├── files
    ├── LICENSE
    ├── LICENSE.OFL
    ├── PATENTS.AV1
    ├── proton
    ├── proton_3.7_tracked_files
    ├── protonfixes
    ├── __pycache__
    ├── toolmanifest.vdf
    ├── user_settings.sample.py
    └── version
```

## Launch options

You can set environment variables and flags through the game's **launch options**.

To check what launch options a game might need see
[protondb](https://www.protondb.com/).

![launch options](/wine/steam-launch-options.png)

::: tip
PEAK mods (BepInEx) require the DLL override for `winhttp.dll`
:::

::: info

On NixOS, the only proton fork available at the moment in nixpkgs is
`proton-ge-bin`, but you can easily override it to install other Proton forks.

```nix
programs.steam = {
  enable = true;
  gamescopeSession.enable = true;
  extraCompatPackages = with pkgs; [
    proton-ge-bin
    (
      (proton-ge-bin.overrideAttrs {
        pname = "proton-em-bin";
        version = "EM-10.0-2F";
        src = pkgs.fetchzip {
          url = "https://github.com/Etaash-mathamsetty/Proton/releases/download/EM-10.0-2F/proton-EM-10.0-2F.tar.xz";
          hash = "sha256-usjEAYEue2tQmOasQM46F1t0qJ1ouVmPyfl2hVlBzOg=";
        };
      }).override
      {
        steamDisplayName = "EM-Proton";
      }
    )
  ];
};
```

:::

<style>
iframe {
    border-radius: 10px;
    border: unset;
}
</style>
