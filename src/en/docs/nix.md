# NIX OS 
NixOS is a Linux distro that uses a package manager called NIX, this OS focuses on having config files making the changes on this system. Its an so-called immutable distribution that won't let you make any hard changes unless you use the config.nix file in etc/nixos/config.nix

This distro is considered **not beginner friendly and it can take up alot of time trying to figure out what the distro even does**, to help cut down the amount of time this could take I have supplied a Config file [here](https://codeberg.org/KyloNeko/Linux-Guide-to-Vtubing/src/branch/master/configuration.nix) You will need to rename the Username to your PC's Username and also change both the Local IP address and the Timezone in this file in order for it to work correctly, if you dont want to directly use the file and make the changes you may cherry pick what you want from this file , but this file is supplied to give you an incredibly good start.

- Veadotube mini : Veadotube mini won't work normally with the linux package you will need to use the windows version + launcher of your choice

- I don't have the nvidia things you need in the config file , but you may be able to install it with this: To install Nvidia drivers on NixOS, you need to modify your /etc/nixos/configuration.nix file by adding services.xserver.videoDrivers = [ "nvidia" ]

- When you update NixOS you will need to run: sudo nixos-rebuild switch in order for it to accept the changes ,  each change is a new generation and you can always rollback to a previous version upon booting up your pc 

- when you update your system if you are good with your current config then you can run this in the terminal to get rid of the old generations: `sudo nix-collect-garbage OR sudo nix-collect-garbage -d` 


## NIX OS App images
This may help you run app images , can't guarantee if it will work with apps like veedotube but most app images should work given if this is put in the config file

To run appimages add the program integration :
`programs.appimage.enable = true;`

in your config and then add the package :
`appimage-run` 

in your packages list under environment.systemPackages = with `pkgs;` 

Then all you need to do is run the terminal command appimage-run followed by your appiamge:
`appimage-run MyAppImage.appimage`

Either navigate to the applicable directory or add the path, that or create your own script to launch and add an Icon to it to make a shortcut if you don't want to use the terminal to run the programs 
