# Prerequisites:

- Decide what style of VTuber you want to be. The common options are 3D, 2D, or PNG.

	- For 3D, the standard is to have a 3D model in the VRM format, though there are other formats specific to certain software such as VSFavatar for VSeeFace. 3D has many advantages for editing and posing but may struggle to achieve some desired art styles.

	- For 2D, you have two options: Live2D which is the most popular and widely used, or Inochi2D which is a new still in-development format that, while incompatible with Live2D, offers similar features as an open source format. Please remember Inochi2D is still not at a 1.0 release yet if you decide to use it.

	- PNG Tubers use a single image, or a handful of edited version of an image, with a program to warp, move, and transform the image in response to audio. This option is the easiest to make and set up but has the most limitations.

- A Linux distro of your choosing
	- If you want to test out some Distros Check out [DistroSea](https://distrosea.com/)

	- Be aware that there are two different desktop backends on Linux: X11 and Wayland. The TL;DR is Wayland is newer and usually better, but there may be some legacy features in X11 that haven't quite made their way to Wayland yet. This is explained in more detail later on. 

- Vtube Studio, VSeeFace, or any other face tracking application that may work on Linux.

- Make sure your Wine dependencies are updated by running the appropriate command for your distribution in a terminal:

    - **Ubuntu/Debian:**
        ```bash
        sudo apt update && sudo apt install wine
        ```

    - **Fedora:**
        ```bash
        sudo dnf update && sudo dnf install wine
        ```

    - **Nobara:**
        ```bash
        nobara-sync cli
        sudo dnf install wine
        ```

    - **Arch Linux:**
        ```bash
        sudo pacman -Syu wine
        ```


## 3D Vtubing Programs

- [VSeeFace](https://www.vseeface.icu/)
- [VNyan](https://suvidriel.itch.io/vnyan)
- [Warudo](https://store.steampowered.com/app/2079120/Warudo/)

## 2D Vtubing Programs

- [Vtube Studio](https://store.steampowered.com/app/1325860/VTube_Studio/)

## PNGtuber Programs

- [veadotube mini](https://olmewe.itch.io/veadotube-mini)

- [Veadotube](https://ko-fi.com/olmewe/tiers) Requires Kofi membership as this is in EarlyAcess

- [Reactive by Fugitech](https://reactive.fugi.tech/)

- [PNGTubeRemix](https://mudkipworld.itch.io/pngremix)

## Face Tracking

- [FaceTracker](https://flathub.org/apps/de.z_ray.Facetracker) off Flathub or you can follow [RougeRen's guide](https://www.youtube.com/watch?v=Q3aMVZXh_cI&t=7s) 

- [ifacialmocap (iPhone or iPad with FaceID required)](https://apps.apple.com/us/app/ifacialmocap/id1489470545)

	- This software can offer better tracking, but requires either a 3D model or Live2D model with rigging specifically made for Apple's ARKit

- [VBridger](https://store.steampowered.com/app/1898830/VBridger/) This works with proton, Check out Weeto's Video [here](https://www.youtube.com/watch?v=PBN9hPVSklQ&t=666s)

## Voice Changers

- [lyrebird voice-changer](https://github.com/lyrebird-voice-changer/lyrebird) no longer updated but forks exist as well and may work

- [EasyEffects](https://github.com/wwmm/easyeffects) Could possibly change your voice with the right settings

- [Clownfish Voice-Changer](https://clownfish-translator.com/voicechanger/download.html) Has a linux app image available

- [Pyvoice](https://github.com/vastavgit/pyvoice) Not technically a voice changer but can work as a text to speech program

- [Soundux voicechanger](https://github.com/Soundux/Soundux/releases/tag/0.2.7) Linux version can be found on the github and its feature rich in whad you can do

- [Sox - Sound eXchange](https://sourceforge.net/projects/sox/files/sox/14.4.2/) this may work 

- [Jack Rack](https://jack-rack.sourceforge.net/) can work as a voice changer if you get the right plugins 


## Art Programs/Art Animation programs

- [Krita](https://krita.org/en/) comes in flatpak [here](https://flathub.org/apps/org.kde.krita)  or you can purchase it on [Steam](https://store.steampowered.com/app/280680/Krita/)

- [Aseprite](https://www.aseprite.org/) you can purchase it on their site or on [Steam](https://store.steampowered.com/app/431730/Aseprite/) , or get it for free from Building it from [Source](https://github.com/aseprite/aseprite) - can also animate sprites

- [Libresprite](https://flathub.org/apps/com.github.libresprite.LibreSprite) - note not related to Aseprite may have less features

- [MyPaint](https://flathub.org/apps/org.mypaint.MyPaint) - general paint program

- [Pixelorama](https://flathub.org/apps/com.orama_interactive.Pixelorama) - sprite animation program

- [inkscape](https://inkscape.org/) - Drawing and image manipulation program, similar to photoshop

- [Gimp](https://www.gimp.org/) - decent alternative to photoshop, also capable of drawing with it

not every art program is listed as their are alot on [Flathub](https://flathub.org/apps/search?q=art)

## Video Editors

- [Kdenlive](https://kdenlive.org/) - Linux alternative to Sony Vegas

- [DaVinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve) - Free version works , if you need codecs you will need to buy the studio license

- [OpenShot](https://www.openshot.org/) - Similar to windows movie maker

- [ShotCut](https://www.shotcut.org/) - another video editor similar to Sony Vegas

- [FlowBlade](https://jliljebl.github.io/flowblade/) - Gpl3 video editor that is lightweight and supports multitracks

- [Lightworks](https://lwks.com/)

## Website Editors

- [Silex-desktop](https://github.com/silexlabs/silex-desktop/releases) - may or may not work last update was in 2022 also completely free

- [Silex Web Editor](https://www.silex.me/) - free online video editor

- [Pinegrow](https://pinegrow.com/) - not free, has a free trial possibly the best website editor tho

- [Bootstrap Studio](https://bootstrapstudio.io/) - not free, has a free trial

- [Editor.Js](https://github.com/codex-team/editor.js?ref=itsfoss.com), [Plugins](https://github.com/editor-js/awesome-editorjs?tab=readme-ov-file) - Completely Free

- [GrapeJs](https://grapesjs.com/) - Free webeditor

- [NitroPage](https://nitropage.org/docs/getting-started) - Supports local installations, free

## More info

- If you have an update manager make sure you're up-to-date

- For Vtube Studio Specifically you need the [IP.txt](https://gist.github.com/DenchiSoft/122729d9a0bd0f96798bea28bfe146d6) file in the streaming assets folder

- A webcam that is UVC compliant (others may work) or a smartphone that can interface over the network (Android is easiest, but an iPhone X or newer can provide better tracking with some additional work)

- Steam: either the system package which is in your distro's app manager or from [Valve directly](https://store.steampowered.com/about/) if you use Ubuntu or something based on Ubuntu, or the [Flatpak*](https://flathub.org/apps/com.valvesoftware.Steam) 
    *The Steam flatpak is unofficial, your milage may vary with support from Valve*


- [OBS Studio](https://flathub.org/apps/com.obsproject.Studio) 


- If you use an AMD graphics card, your drivers are already built into the kernel. If you use Nvidia, you can try to get a Linux version that had your drivers included already (ex. Pop!_OS or Nobara) or install them yourself.

For Ubuntu based distros (if your installer doesn't already give you an option at install): https://ubuntu.com/server/docs/nvidia-drivers-installation

For Arch: https://wiki.archlinux.org/title/NVIDIA 

For audio you may want to grab the following packages: 

```pavucontrol
qjackctl
qpwgraph
easyeffects
qasmixer
```

These all help with audio control and configurations on linux. Most of them should be in your app store, or can be installed from the terminal with one of the following commands:

Ubuntu: `sudo apt install` followed by the name
Fedora: `sudo dnf install` followed by the name
Arch:	`sudo pacman -Syu` followed by the name

So for example, I want to install `easyeffects` on **Linux Mint** which is **Ubuntu based**. I would use `sudo apt install easyeffects`


OPTIONAL Prerequisites:
- Install Proton-GE either by using [ProtonUp-QT](https://flathub.org/apps/net.davidotek.pupgui2)
or by using [ProtonPlus](https://flathub.org/apps/com.vysp3r.ProtonPlus)
If you are on Arch Linux Proton-GE is also located in the Aur as [proton-ge-custom-bin](https://aur.archlinux.org/packages/proton-ge-custom-bin)
(Try to get the latest Proton-GE version, though you may need to experiment with what works best with Vtube Studio or any other software on Steam) 
- [Lutris](https://flathub.org/apps/net.lutris.Lutris) This is to be used for VTS POG. Also make sure port 3800 tcp is open in your firewall with an exception. If you're unsure how to do this, just skip setting up VTS POG. 
- [VTS POG](https://eruben.itch.io/vts-pog)
- [Mix it up](https://mixitupapp.com/)
- [T.I.T.S](https://remasuri3.itch.io/tits) 
- [Bottles](https://flathub.org/apps/com.usebottles.bottles) - possible usage for other Vtubing applications like VSeeFace (lutris can also be used here or you can use Steam's built in non-steam game feature as well, though it usually isn't recommended to use for non-games.) 

- Optional UVC compliant Capture card like the Pcie EZCAP/Pyle LINK capture cards for consoles or second PC capture. Alternatively, for a second PC you can use NDI capture over the network (NDI capture can add lag so be aware of this)