
# OBS Studio

Now Unfortunately the Plugin for Spout 2 Doesn't work in OBS (on linux) as of right now, But there's at least 3 alternatives. You can either use a Chroma Keyed Window Capture, enable game capture with the instructions above, or you can enable NDI capture for Vtube studio. In my experience the best methods are either Window capture or game capture these both offer no latency despite with window capture the UI being visible so that is what will be covered in this guide along with instructions to get gamecapture working.

### Window Capture Method

First go to OBS and select Window Capture (Xcomposite) then select Vtube Studio it should look like this after you load your model in: 

Next you need to change the background to color picker and change the color to this value here: 

You should get this (optionally you can also do 2bf0 instead for a blue screen): 

Next you should go into OBS and select these filters:

Next you should go into the chroma Key Filter and adjust your settings to something like this: 
 
TA-DA! you should get this:

You can now Live2D Vtube on Linux!
Make sure the live2d window is open though or you will be greeted with a black screen, you cannot minimize this but keeping it open is the best solution to this issue.

### Game Capture Method

First for this Method you will need to go to [the obs-vkcapture releases page](https://github.com/nowrep/obs-vkcapture/releases/tag/v1.5.1).

For Arch Based Distributions you will need the Aur package [here](https://aur.archlinux.org/packages/obs-vkcapture-git).

For Fedora based Distributions they have vkcapture in their official repositories it is installed with 

`sudo dnf install obs-studio-plugin-vkcapture`

Open Terminal and use the commands (ubuntu based distrubutions)

```
sudo apt install libvulkan-dev vulkan-tools
sudo apt install libgl1-mesa-dev
sudo apt install libobs-dev
```

after these have been installed 

next download the source files and extract them from the Zip file

open the terminal again from within the extracted files root directory

Install Cmake `sudo apt install cmake`

type in `mkdir build && cd build`

then it will create a build folder

then run `cmake -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release ..`

then run `sudo make` then `sudo make install` or run make & make install as Superuser/root

after that is done game capture has been installed! This will work on both the Native version of Obs for Linux and Also the Flatpak version as well!

Now go into Vtube Studio , go to Launch options and put in this launch option obs-gamecapture %command% 

make sure Vtube Studio is being ran with the latest version of GE-Proton 

Then you may have to either download the gamecapture plugin from the software center as an addon if using the flatpak, or get the plugin itself from the [Flatpak plugin repository](https://github.com/flathub/com.obsproject.Studio.Plugin.OBSVkCapture) or the [non-Flatpak plugin page](https://obsproject.com/forum/resources/linux-vulkan-opengl-game-capture.1236/). The non-Flatpak plugin goes into the plugins folder.

::: warning
If you are still on Linux Mint 21 or a distro with a similar update patternI Highly Suggest you update your distro to Linux Mint 22 (or latest version of your distro) their is a fix for this if you change Enviroment variables for either the PPA or the Flatpak `OBS_USE_EGL=1 /bin/obs` or else Linux mint 21 wont recognize the Gamecapture packages from libobsdev
:::


## OBS Plugins That are useful

[Pipewire Audio capture](https://obsproject.com/forum/resources/pipewire-audio-capture.1458/) this makes it significantly easier to choose the audio source in OBS
[Aitum Multistream](https://obsproject.com/forum/resources/aitum-multistream.1991/) The best Multistreaming solution
[Multi RTMP](https://obsproject.com/forum/resources/multiple-rtmp-outputs-plugin.964/) The other Multistreaming solution
[Closed Captions Plugin](https://obsproject.com/forum/resources/closed-captioning-via-google-speech-recognition.833/) Good plugin for the hearing impaired
[DistroAV](https://obsproject.com/forum/resources/distroav-network-audio-video-in-obs-studio-using-ndi%C2%AE-technology.528/) This plugin has alot of NDI capture/Sound/Filter options
[Scale to Sound](https://obsproject.com/forum/resources/scale-to-sound.1336/) makes a source scale based on the audio levels of any audio source you choose
[atkAudio Plugin](https://obsproject.com/forum/resources/atkaudio-plugin.2099/) Super advanced audio plugin comes with Audio equalizer , its own Audio patch bay and also able to select and change sources to your hearts desire 