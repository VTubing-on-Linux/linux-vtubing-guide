# Lutris

[Lutris](https://lutris.net/about) uses scripts to automatically setup wine
prefixes with all the quirks it needs. If your application has a script
available, then you're in luck! If not, you can use wine to install the
application manually then add it to your Lutris library.

![lutris](https://lutris.net/static/images/screenshots/gog-screen.jpg)

## Add custom runners (manually)

You can download and unzip your wine/proton fork to the following folder

```sh
$HOME/.local/share/lutris/runners/
├── proton
│   ├── ge-proton
│   │   ├── compatibilitytool.vdf
│   │   ├── filelock.py
│   │   ├── files
│   │   ├── LICENSE
│   │   ├── LICENSE.OFL
│   │   ├── PATENTS.AV1
│   │   ├── proton
│   │   ├── proton_3.7_tracked_files
│   │   ├── protonfixes
│   │   ├── __pycache__
│   │   ├── toolmanifest.vdf
│   │   ├── user_settings.sample.py
│   │   └── version
└── wine
    └── wine-ge-8-26-x86_64
        ├── bin
        ├── lib
        ├── lib64
        └── share
```

It should become available as an option in the _runners_ menu.
