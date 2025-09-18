# Other Software that may be useful for Vtubing on Linux

## Stream Deck Alternatives for possible use for Vtube Studio & other applications

[Open-Deck](https://github.com/joshr120/open-deck) lets you install the vtube studio plugin from the offical streamdeck app so you can add your toggles onto it

[streamcontroller](https://github.com/StreamController/StreamController) For use with Obs if the Above breaks that you can use for hotkeys

[Boatswain](https://flathub.org/apps/com.feaneron.Boatswain) Yet another stream deck appliation that might be useful 

*boatswain uses an older Obs websocket , so its outdated so dont use it unless you want to use an older websocket plugin not shipped with obs*


## VTS POG TTS application 

Hello again so after switching to Linux I wanted to find a way to use VTS POG

First off you need to Purchase VTS-POG off of Itch.io: https://eruben.itch.io/vts-pog 

Next you will need to get the Lutris Flatpak, the system package WILL NOT WORK: https://flathub.org/apps/net.lutris.Lutris 

Next you will need to install Vts POG and then go into the files on itch and Copy it to the desktop

Next you will need to open up Lutris and add a game:

Make sure you select the Locally Installed option: 

Next you will need to go into your game options and select the `VTS POG.exe` that is in the vts pog folder you put on the desktop:

Once you do that go to Runner options and change it to a GE Proton Runner:

As of the time of this writing VTS POG is only compatible with Steam as of Right now , Something Broke in Lutris also make sure You check your firewall configuration and let vtspog through you may need to also let port 27036 open

Click on VTS POG that you just made and click on play and you should see this appear:

Go to OBS and add the HTML files for the pngtuber in the browser source locally. A guide for this can be found [here](https://www.youtube.com/watch?v=DW6oDI4GFoo)

Make sure you when you open up VTS pog on linux you hit TTS Enabled and disabled every time you open it for it to actually register the 3800 port in the system , also make sure you allow port 3800 tcp in your firewall as on linux it can Nuke VTS pog for a bit before it gets re-established again (it's not foolproof but it will happen less) 

And it should work, also Live 2d models will work if you load them in as items after configuring them as well as VTS pog will communicate with Vtube studio just like an I-phone would via a Network Port.

Here is a Video guide for VTS POG as well that I made showcasing what is possible : https://youtu.be/lE5g9CSwmfE

also I would like to note that the Faugus launcher also works with this


## Mix it Up

So recently I got Mix it Up working  on linux and I want to be able to share my findings , this one is a bit more simple than the other parts of the guide but you will need to do a few things:

	Prerequisites 

Download Mix it Up here: https://mixitupapp.com/ 

Get the program called bottles off of Flathub to be used to install and run the program:https://flathub.org/apps/com.usebottles.bottles 

Make sure you have Vtube Studio: https://store.steampowered.com/app/1325860/VTube_Studio/ 


Step 1 go to bottles and create a Runner under gaming for Mix It up click on the plus sign:

After the bottle is created go ahead and change your runner to Proton GE then install the program the program that is installed wont immediately appear in bottles but the directory will show up now there is a number of ways to run this program as it works in bottles and proton tricks but the simplest way of getting this program to work is running it in bottles  so after you install it find the program in the directory after you install it from the downloads folder: 

Then add the Mix it up Exe as a shortcut in bottles under ge proton in bottles: 

Next click run and it should let you sign into your twitch account( note if you have issues with it letting you sign in try using proton tricks or steam to facilitate this) :
 
Next navigate to services with vtube studio open with plugins enabled a pop up appear:

It should connect to the program properly

Create a Browser source and put this in the url part of it as on linux the copy command in Mix it up doesn't work properly: http://localhost 8111/overlay/ 

Next follow this video guide by Demythical to add your redeems https://youtu.be/mRpHrXeK5s0 
Tada now you should have redeems working with obs and vtube studio!

also I would like to note that the Faugus launcher also works with this

## Twitch Integrated Throwing System

	Prerequisites:
[T.I.T.S](https://remasuri3.itch.io/tits)

Get the program called [Bottles](https://flathub.org/apps/com.usebottles.bottles) to set up and run the program

Make sure you have [Vtube Studio](https://store.steampowered.com/app/1325860/VTube_Studio/) and [OBS Studio](https://flathub.org/apps/com.obsproject.Studio) 

Just like with Mix it up make a bottle for TITS and use the GE proton runner

Next go to  https://remasuri3.itch.io/tits  and purchase and download the program as a Zip file

Go into bottles and add it as an executable shortcut

And you should see this: 

Next go to connections and enable Twitch and Vtube Studio (or VSeeFace)

You will then be greeted with this: 

Go to obs an add TITS in window capture:

Make sure the color key is: 323232 as this will allow for transparency

Follow this video to make [redeems for TITS by maddiekuma](https://www.youtube.com/watch?v=hWOIZqv-u50) happy throwing!

also I would like to note that the Faugus launcher also works with this


## VmagicMirrior on Linux 

A good indepth video can be found here by [Cyb3r-Kun](https://www.youtube.com/watch?v=S7t5EVSNx9k)
