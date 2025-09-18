# 3D Vtubing


Follow this video made by [Robo n' Tux Guides](https://youtu.be/H0YotaNSbDc?si=EkrrlxiQ-h6eEDKr)

VSeeFace is covered in that video [here](https://youtu.be/H0YotaNSbDc?si=FyiimfEbSMJmYNDL&t=223)

For OBS game capture you will need a plugin called [OBS-VKcapture](https://github.com/nowrep/obs-vkcapture) installed. As far as I'm aware Vtube Studio doesn't play nicely with linux gamecapture as a launch option just yet but VSeeFace should.

The launch option you would use in Bottles after you made the runner and got the program added as a shortcut would be `obs-gamecapture %command%`

the Faugus launcher also works with Veeseeface

## Full Body tracking using XR Animator 

```
                   Introduction 

Three pieces need to be connected to have a functional full body tracking setup. A tracking software, an avatar puppeteering program and OBS.

Programs like VseeFace and Warudo are avatar puppeteering programs and can normally do the tracking themselves, but in order to use them on Linux they must run under wine/proton and they don’t play well with webcams. Thus the need of an external program to do the tracking.

The tracking program program send the information through the network (technically, but usually it is sent and received on the same computer) and this allows the tracking information to reach the application running under wine/proton. For  this we have to enable the VMC protocol on both the tracker (sender) and the avatar program (receiver).

                   I. XR Animator setup
XR Animator is very simple to setup. Just follow the steps:

1.Download the latest release for linux-64 of XR Animator at: https://github.com/ButzYung/SystemAnimatorOnline/releases/tag/XR-Animator_v0.25.0

2.Place the downloaded archive in a convenient folder and extract it.

3.Navigate to the electron app folder inside, give execution permissions to the electron file if required. (chmod u+x ./electron)

4.Run the electron program.

5.Click start.

6.Configure the program using the bottom menu.

7.Double click the camera icon. Enable selfie camera = Yes.

8.Choose your camera from the list.

9.Double click the Motion capture button.

10.Select “Full body (MediaPipe vision)”.

11.Double click the VMC button.

12.Set VMC Protocol and Send Camera Data to ON. Set the App mode to your application (VseeFace/Warudo, etc) if listed.

13.Disable the Avatar.

14.Click done.

                   II a. VseeFace Setup

Installation process using lutris:

1.Download VseeFace from: https://www.vseeface.icu/#download

2.Move the archive to a convenient folder and extract it.

3.Run protonup. (If you don’t have it and you are on Arch you can get it using an AUR helper such as yay. “yay -S protonup-qt-bin”).

4.Select lutris. Click “add version”. Select Wine-GE and install the latest one. Close.

5.Run lutris. Click the plus sign and choose add locally installed game.

6.Give it a name and choose wine as the runner. Move to the “game options” tab.

7.In executable, click the “…” button and find the VseeFace program you downloaded.

8.If you will use window capture, put –background-color ‘#00FF00’ in arguments.

9.In working directory, click the “…” button and find the VseeFace folder.

10.In wine prefix, find an empty folder or create one to store the prefix.

11.Choose 64bit architecture.

12.Move to runner options and confirm that the selected wine version is the one installed with protonup.

13.Save the settings.

14.Select the VSF application from the lutris menu, and in the bottom click the upwards arrow, to the right of the jostick button. Then click on winetricks. Wait for the prefix to be created and the menu to appear.

15.On the new menu, select “Selet the default wine prefix”.

16.Select “install a font”.

17.Search for corefonts. Check it and click ok.

18.Click OK on the bunch of error wine is going to throw. They are a lot.

19.Once it’s done and you are back on the menu. Click cancel twice to exit.

20.Run VSF, it should be ready.

Setup for VMC:

1.Open VseeFace.

2.Select any camera. It won’t be used but it forces you to choose at the start.

3.Select your microphone. Will be used for lip sync.

4.Start the simulation.

5.Open the settings menu and go to General Settings.

6.Here scroll down to OSC/VMC Protocol.

7.Enable the OSC/VMC receiver.

Optional: Check “Apply VseeFace Tracking” and “Track Face Features”. There is a problem here. With it enabled, lip sync will work, but expressions won’t. And viceversa. Choose one or the other.  I assume this happens because with it enabled VseeFace overrides the info received through VMC allowing it to manage lip sync, but since it can’t track, expressions aren’t processed. And the other way around, if it’s disabled, VseeFace can identify expressions in the data received, but can’t do lip sync since it’s not in control. A potential solution that I can’t test would be to have 2 cameras. So that XR Animator uses one, and VseeFace uses another one. That way VseeFace could override the XR’s face tracking with it’s own. However this could be costly in performance. In any case this is just a hypotesis. 


                   II b. Warudo

Warudo’s installation is trivial, with it being a Steam application, so I will assume it is already installed. However I will state the reminder that version 10-10 of GE-Proton should be used, since 9.x , seem to not work at this time. Also that character models must be stored in “steamapps/common/Warudo/Warudo_Data/StreamingAssets/Characters”

1.Open Warudo.

2.Open the onboarding assitant.

3.Click “Get Started” on “Basic Setup.”

4.Choose your model and click “OK”.

5.Choose to get a recommendation and click “OK”

6.Set everything to “NO” and click OK.

7.Set both face tracking and pose tracking to VMC.

8.Click on customize face tracking.

9.choose whatever options you like, but the important thing is at the bottom. Set lip sync to always, choose your mic, and enable hybrid mode. Click OK.

10.Click OK.  And then again if you get a warning about poses.

11.Say yes to Import expressions and click OK. Then OK again.

12.Select “I want to pick and environment” and then None. Then go to camera settings and enable Chroma Key.

13.additonally you will need the launch options PROTON_DISABLE_NVAPI=1 PROTON_USE_NTSYNC=1 PROTON_USE_WOW64=1 %command% to get the editor to work

14.you can then use proton 8 to load the last scene you had loaded in with GE proton 10-10

also note that: GE Proton 10: memory leak issues but you can access the config editor
                    Proton 8: editor won’t run, but it will load the last scene you had open, no memory leak

                   III. OBS

Nothing special. Use window capture or game capture as usual.


                   IV. Conclusions

While writing this document I tested both VseeFace and Warudo and confirmed that Warudo does not have the conflict between lip sync and expressions. Warudo is therefore, much to my dismay because I don’t like the reliance on Steam, the superior option. I wonder why the devs don’t make it available outside if it’s free.

[Video version here](https://www.youtube.com/watch?v=O7EkbzLpl-8)

# V-Nyan

Vnyan is also an alternative to Warudo if you can't get Warudo to work , however it does suffer from a memory leak problem if you use Proton, proton ge ( yet to be confirmed if you use UMU)

1.download Vnyan from Itch.io [here](https://suvidriel.itch.io/vnyan)

2.Choose a program to launch it from steam/lutris/bottles/faugus ect 

3.once the program is started it will detect your webcam natively

4.Load your model into the program and then change your background to a greenscreen for window capture , or use gamecapture launch options

5.make sure to allow transparency in Obs studio if using gamecapture , if not use window capture and use a chroma key filter instead

6.happy vtubing!
```
