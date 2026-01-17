# Running Windows Software on Linux

There are two main ways of doing that: virtual machines or a compatibility
layer (wine).

## Virtual Machines

You can use [virt-manager](https://virt-manager.org/) or other tools to set up
a virtual machine. However, it demands a lot of resources and performance isn't
the best, so this guide won't cover this usage.

## Wine

[Wine](https://www.winehq.org/) is a compatibility layer that allows you to run
Windows applications on Linux. It translates Windows API calls into POSIX
calls, enabling many Windows applications to run on Linux.

See [Wine#Introduction](/docs/wine/introduction) to learn how to use it.

![l2dc_viewer](/l2dc_viewer.png)
_Live2D Cubism Viewer running under Debian 13 with Proton_

## Steam

Steam uses a fork of Wine called [Proton](https://www.protondb.com/) and it's
what makes the Steam Deck possible.

You can set the default Proton version it uses through the Steam settings or
set it per-game in the game properties.

See the [wine/third-party/steam](/docs/wine/third-party/steam) section for more
advanced usages, including installing Proton forks made by the community and
configuring custom launch options.

![steam_set](/steam_set.png)
