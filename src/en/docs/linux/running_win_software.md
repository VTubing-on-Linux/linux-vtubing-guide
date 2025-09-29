# Running Windows Software on Linux

Many popular VTubing applications / games are Windows-only. However, there are several ways to run Windows software on Linux, including using compatibility layers, virtual machines, or dual-booting.

## Wine

[Wine](https://www.winehq.org/) is a compatibility layer that allows you to run Windows applications on Linux. It translates Windows API calls into POSIX calls, enabling many Windows applications to run natively on Linux. Valve also maintains a fork of Wine called [Proton](https://www.protondb.com/), which is specifically designed for gaming.


## Install Steam & Proton

Valve Proton is essential for running many Windows-only games and VTubing applications on Linux. After installing Steam from your package manager, go to **Settings -> Compatibility** and enable Steam Play for all titles. Restart Steam when prompted to apply the changes. Steam will now automatically use Proton to run Windows games and applications.

![steam_set](/steam_set.png)


## GE-Proton

::: tip
If you're new to running Windows software on Linux, start with the standard Proton provided by Steam. Once you're comfortable and want to explore more compatibility options, you can try out GE-Proton for additional features and improvements.
:::

Proton-GE is a community-made version of Proton that includes additional patches and improvements for better compatibility with certain applications. It is recommended to use Proton-GE for VTubing software, as it often provides better performance and compatibility than the default Proton version. To install Proton-GE, download the ProtonUp-Qt app and run it. The app will give you a menu for what version to download and where to install it to. 

::: tip
As the writing of this guide, GE-Proton9-11 works the best. This is however subject to change.
:::


![l2dc_viewer](/l2dc_viewer.png)

*Live2D Cubism Viewer running under Debian 13 with Proton*
