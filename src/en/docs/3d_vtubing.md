# 3D Vtubing


Follow this video made by [Robo n' Tux Guides](https://youtu.be/H0YotaNSbDc?si=EkrrlxiQ-h6eEDKr)

VSeeFace is covered in that video [here](https://youtu.be/H0YotaNSbDc?si=FyiimfEbSMJmYNDL&t=223)

For OBS game capture you will need a plugin called [OBS-VKcapture](https://github.com/nowrep/obs-vkcapture) installed. As far as I'm aware Vtube Studio doesn't play nicely with linux gamecapture as a launch option just yet but VSeeFace should.

The launch option you would use in Bottles after you made the runner and got the program added as a shortcut would be `obs-gamecapture %command%`

the Faugus launcher also works with Veeseeface

## Full Body tracking using XR Animator

A video version of this guide is available [here](https://www.youtube.com/watch?v=O7EkbzLpl-8).

### Introduction

Three pieces need to be connected to have a functional full body tracking setup: a tracking software, an avatar puppeteering program, and OBS.

Programs like **VSeeFace** and **Warudo** are avatar puppeteering programs and can normally do the tracking themselves. However, to use them on Linux, they must run under Wine/Proton, where they don’t play well with webcams. This creates the need for an external program to do the tracking.

The tracking program sends information through the network (usually on the same computer), allowing the tracking information to reach the application running under Wine/Proton. For this, we have to enable the VMC protocol on both the tracker (sender) and the avatar program (receiver).

### I. XR Animator setup

**XR Animator** is very simple to set up. Just follow these steps:

1.  Download the latest `linux-64` release of XR Animator from [here](https://github.com/ButzYung/SystemAnimatorOnline/releases/tag/XR-Animator_v0.25.0).
2.  Place the downloaded archive in a convenient folder and extract it.
3.  Navigate to the `electron` app folder inside and give execution permissions to the `electron` file if required (`chmod u+x ./electron`).
4.  Run the `electron` program.
5.  Click **Start**.
6.  Configure the program using the bottom menu.
7.  Double-click the camera icon. Set **Enable selfie camera** to **Yes**.
8.  Choose your camera from the list.
9.  Double-click the **Motion capture** button.
10. Select **Full body (MediaPipe vision)**.
11. Double-click the **VMC** button.
12. Set **VMC Protocol** and **Send Camera Data** to **ON**. Set the **App mode** to your application (VSeeFace/Warudo, etc.) if listed.
13. Disable the **Avatar**.
14. Click **Done**.

### II a. VSeeFace Setup

#### Installation process using Lutris:

1.  Download VSeeFace from [its website](https://www.vseeface.icu/#download).
2.  Move the archive to a convenient folder and extract it.
3.  Run **ProtonUp-Qt**. (If you don’t have it on Arch, you can get it using an AUR helper like `yay`: `yay -S protonup-qt-bin`).
4.  Select **Lutris**. Click **Add version**. Select **Wine-GE** and install the latest one. Close ProtonUp-Qt.
5.  Run **Lutris**. Click the `+` sign and choose **Add locally installed game**.
6.  Give it a name and choose **Wine** as the runner. Move to the **Game options** tab.
7.  For **Executable**, click the `...` button and find the `VSeeFace.exe` program you downloaded.
8.  If you will use window capture, put `--background-color '#00FF00'` in **Arguments**.
9.  For **Working directory**, click the `...` button and find the VSeeFace folder.
10. For **Wine prefix**, find an empty folder or create one to store the prefix.
11. Choose **64-bit** architecture.
12. Move to **Runner options** and confirm that the selected Wine version is the one installed with ProtonUp-Qt.
13. Save the settings.
14. Select the VSeeFace application from the Lutris menu. In the bottom bar, click the upwards arrow next to the joystick button, then click on **Winetricks**. Wait for the prefix to be created and the menu to appear.
15. On the new menu, select **Select the default wineprefix**.
16. Select **Install a font**.
17. Search for `corefonts`, check it, and click **OK**.
18. Click **OK** on the series of errors Wine will show.
19. Once it’s done, click **Cancel** twice to exit the Winetricks menu.
20. Run VSeeFace.

#### Setup for VMC:

1.  Open VSeeFace.
2.  Select any camera. It won’t be used, but it's required at the start.
3.  Select your microphone. This will be used for lip sync.
4.  Start the simulation.
5.  Open the **Settings** menu and go to **General Settings**.
6.  Scroll down to **OSC/VMC Protocol**.
7.  Enable the **OSC/VMC receiver**.

> **Optional:** Check **Apply VSeeFace Tracking** and **Track Face Features**. There is a trade-off: with it enabled, lip sync will work, but expressions won’t, and vice-versa. This likely happens because VSeeFace overrides the VMC info, allowing it to manage lip sync but preventing expression tracking. If disabled, VSeeFace can identify expressions from the received data but cannot perform lip sync.

### II b. Warudo

Warudo’s installation is trivial as a Steam application. It is recommended to use **GE-Proton 10-10**, as version 9.x may not work. Character models must be stored in `steamapps/common/Warudo/Warudo_Data/StreamingAssets/Characters`.

1.  Open Warudo.
2.  Open the onboarding assistant.
3.  Click **Get Started** on **Basic Setup**.
4.  Choose your model and click **OK**.
5.  Choose to get a recommendation and click **OK**.
6.  Set everything to **NO** and click **OK**.
7.  Set both **Face Tracking** and **Pose Tracking** to **VMC**.
8.  Click on **Customize Face Tracking**.
9.  Choose your preferred options, but ensure at the bottom you set **Lip Sync** to **Always**, choose your mic, and enable **Hybrid Mode**. Click **OK**.
10. Click **OK**, and again if you get a warning about poses.
11. Say **Yes** to **Import expressions** and click **OK**, then **OK** again.
12. Select **I want to pick an environment**, then **None**. Go to **Camera Settings** and enable **Chroma Key**.
13. You will need the following launch options to get the editor to work:
    ```bash
    PROTON_DISABLE_NVAPI=1 PROTON_USE_NTSYNC=1 PROTON_USE_WOW64=1 %command%
    ```
14. You can then use Proton 8 to load the last scene you had loaded with GE-Proton 10-10.

> **Note on Proton versions:**
> *   **GE-Proton 10:** Has memory leak issues, but you can access the config editor.
> *   **Proton 8:** The editor won’t run, but it will load the last scene you had open with no memory leak.

### III. OBS

Nothing special. Use **Window Capture** or **Game Capture** as usual.

### IV. Conclusions

After testing, **Warudo** does not have the conflict between lip sync and expressions that VSeeFace does, making it the superior option despite its reliance on Steam.

## V-Nyan

**V-Nyan** is an alternative to Warudo if you can't get Warudo to work. However, it may suffer from a memory leak problem when used with Proton or Proton-GE.

1.  Download V-Nyan from [itch.io](https://suvidriel.itch.io/vnyan).
2.  Choose a program to launch it from (Steam, Lutris, Bottles, etc.).
3.  Once the program is started, it should detect your webcam natively.
4.  Load your model and change the background to a green screen for window capture, or use game capture launch options.
5.  If using game capture, make sure to **Allow transparency** in OBS Studio. If using window capture, use a **Chroma Key** filter instead.
6.  Happy vtubing!
