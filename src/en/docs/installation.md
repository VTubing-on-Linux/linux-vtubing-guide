
# Installing your distro

Ok you made it this far after you selected your [flavor of Linux](https://distrosea.com/), you can now grab a flash drive and then either use [Ventoy](https://www.ventoy.net/en/index.html), [Balena Etcher](https://etcher.balena.io/) or [Rufus](https://rufus.ie/en/)

Ventoy allows you to throw multiple live ISOs on a USB stick to test out various distros, this will also work on Windows and Linux

Rufus only works on Windows, but Balena Etcher works on Windows, Mac, and Linux. 

Select your drive you intend to use, locate the `.iso` file you downloaded and then proceed to flash it to the usb drive. Once you do that.

::: danger
I HIGHLY suggest you also BACK UP any files you wanted to keep from windows to a different drive or use a cloud storage like Google drive. Do note that things stored on a cloud service may not be private so check the TOS before using it for sensitive data. 
:::


After you back up everything you want, reboot your PC and either go into the BIOS/UEFI settings or your boot menu. This is usually done with an F key (F2, F9, F10, F11, F12, delete or escape) depending on your motherboard or laptop manufacturer. Select your Linux bootable drive as the default boot option in your BIOS/UEFI settings or as the drive to boot from on the Boot menu. Sometimes you may need to disable Fast Boot and Secure Boot in your BIOS/UEFI settings before your PC will let you boot another operating system like Linux. 

Once this is done, you will then be able to boot into a Linux bootloader called grub and can then select the top option (usually) and be able to boot into a welcome screen. From here you can minimize the Welcome menu or click "Try Linux/Ubuntu/Fedora/Whatever" to play around with Linux before you fully commit to installing. Anything you do in this trial mode won't be saved when you reboot however. 

When you do decide to install, be aware that **WINDOWS WILL BE DELETED AND EVERYTHING ON IT!** This is why making backups first is so important. Make sure you do everything the welcome screen installer tells you to (and maybe play around with the os more before you install) and then your distro is installed you may be notified to reboot into the PC. Turn off the computer, remove the USB, and when you power it back on you'll have replaced Window with Linux! 

After you have done that you may be given another welcome screen to follow and install any updates or drivers you deem necessary. If you don't get this screen, it's usually a good idea to run an system update before you do anything else. This can usually be done in the included app store (the name of which will vary depending on what distro you chose) or by running a command in the terminal. Terminal commands to update the system and then install a program called Wine are included earlier in this guide. 