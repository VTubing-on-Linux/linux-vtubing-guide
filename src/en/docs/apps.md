
# Install Steam & Proton/GE-Proton

Steam Proton is a very valuable aspect of this whole thing as it is the one that is able to interface with a lot of the applications here, so use the links above and download steam and get [VTube studio](https://store.steampowered.com/app/1325860/VTube_Studio/), or any of the other applications mentioned above as possible alternatives. Once you have signed into steam make sure you also go to Settings -> Compatibility -> enable steam play -> then reboot steam once you are prompted.

To install Proton-GE, download the ProtonUp-Qt app linked earlier in this guide and run it. The app will give you a menu for what version to download and where to install it to. As the writing of this guide, GE-Proton9-11 works the best. This is however subject to change.


# Vtube Studio 

Firstly grab  [VTube studio](https://store.steampowered.com/app/1325860/VTube_Studio/) off of steam and install it , go into the compatibility settings and choose either ProtonExperimental or use the latest Ge-Proton verson, then go into the files and navigate to streaming assets, put the [IP.txt file](https://gist.github.com/DenchiSoft/122729d9a0bd0f96798bea28bfe146d6) from here after you downloaded it and put it in the streaming assets folder.

Once that is said and done make sure you grab the Flatpak for [Face tracker](https://flathub.org/apps/de.z_ray.Facetracker) this will already have the appropriate settings enabled but you may change a few to see fit, make sure you select your webcam and also enable it! 

Example of the settings I Use and it should work after you enable your Webcam in Vtube studio

Once you're in Vtube studio you will notice a few things are off. Like your eyes are pointing up for whatever reason , this can be fixed after you adjust a few values , these may vary but offer similar results depending on the model , you may also need to adjust and configure some mouth shape settings:

After you have made your adjustments to your model you will then need to go to obs

If you want your Screenshots to be more accessiable and not behind 17 folders Check out Weeto's Guide [here](https://www.youtube.com/watch?v=icuUln4oKeE) or locate the folder in `steam/compatdata/1325860/pfx/drive_C/user/steamuser/Pictures/` Screenshots and then Press CTRL+SHIFT and drag and drop it to the Pictures folder in the Home Directory of your PC , it will create A System Link or a Shortcut Directly to the Main Directory so you can avoid having to go through 17 folders and just access the source files directly instead



# VBridger

[VBridger](https://store.steampowered.com/app/1898830/VBridger/) is a program to give advanced arkit tracking to both 2d and 3d models. That tracking can be use with an Iphone this program can be launched via enabling Proton in the Steam compatibility mode, You should then be able to attach it via a port or a plugin depending on the vtubing application used, if you are having issues with the program tracking your Iphone you need to make sure that you are using the alternative 3rd Party PC clients option and to make sure you allow the connection through your distros firewall


# UMU Launcher 
Some apps installed through Steam can use the -nosteam flag to launch without the Steam client.  However, many of these apps are Windows programs that require Steam Proton to run.  For that, we have UMU Launcher.    Two .desktop files for VTube Studio and VBridger are provided [here]((https://drive.google.com/drive/u/1/folders/1QQMpSqkxS62rX9eqLzFFbDNyatPU-ERO).
Install UMU Launcher, place the .desktop files in ~/.local/share/applications/, and you're done!

If your distro doesn't package UMU Launcher, you can manually download it from [OpenWineComponets](https://github.com/Open-Wine-Components/umu-launcher/releases).  If installing the .deb version you need two files, one that starts with "python3-umu-launcher..." and the one that starts with "umu-launcher..." (install the python one first).


- terminal version:
```
wget https://github.com/Open-Wine-Components/umu-launcher/releases/download/1.2.5/python3-umu-launcher_1.2.6-1_amd64_debian-12.deb
wget https://github.com/Open-Wine-Components/umu-launcher/releases/download/1.2.5/umu-launcher_1.2.6-1_all_debian-12.deb
```

- Install dependencies:
```
sudo apt install libc6 libgcc-s1 python3 python3-xlib apparmor-profiles libgl1-mesa-dri:i386 libglx-mesa0:i386 libzstd1
```

- Install the .deb files you downloaded:
```
sudo dpkg --install ~/Downloads/python3-umu-launcher_1.2.6-1_amd64_ubuntu-noble.deb
sudo dpkg --install ~/Downloads/umu-launcher_1.2.6-1_all_ubuntu-noble.deb
```



- One big command:
```
wget https://github.com/Open-Wine-Components/umu-launcher/releases/download/1.2.5/python3-umu-launcher_1.2.5-1_amd64_debian-12.deb
wget https://github.com/Open-Wine-Components/umu-launcher/releases/download/1.2.5/umu-launcher_1.2.5-1_all_debian-12.deb
sudo apt install libc6 libgcc-s1 python3 python3-xlib apparmor-profiles libgl1-mesa-dri:i386 libglx-mesa0:i386 libzstd1
sudo dpkg --install python3-umu-launcher_1.2.5-1_amd64_debian-12.deb
sudo dpkg --install umu-launcher_1.2.5-1_all_debian-12.deb
```

# Faugus launcher

For people having problems using UMU by itself their is a launcher called the [Faugus Launcher](https://github.com/Faugus/faugus-launcher/releases)  [(Flatpak here)](https://flathub.org/apps/io.github.Faugus.faugus-launcher)

This Launcher makes it easier to launch windows games and programs Via GE-Proton/UMU-Proton also in the case of Vtube Studio , you can launch it with this launcher if you choose the start without steam `.bat` file

This is the easiest solution as of right now to get things running through UMU as its a lightweight launcher 

Some programs you will have to let connections through the firewall to get it to work properly depending on the vtubing application used


# Helpful streaming programs to help manage streams and Multistreaming

[Streamer.bot](https://streamer.bot/) works if you use the install script in bottles, Some features may not work so your miliage may vary Weeto has a guide [here](https://www.youtube.com/watch?v=JfNXlBeYC48)

[Stream ninja](https://socialstream.ninja/landing) this has a native linux app image and works very well 

[restream.io](https://restream.io/) This is yet another Multi streaming tool, It lets you multistream from two places for free, but for more than that you will need to pay for it

