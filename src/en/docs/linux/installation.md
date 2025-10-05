# Installation

Before you start, you will need:

*   A USB flash drive with at least 8 GB of storage.
*   An internet connection to download the necessary files.
*   A backup of your important data. **The installation process can erase your hard drive.**


## 1. Create a Bootable USB Drive

You need to write the downloaded image file to a USB drive to make it bootable.

1.  **Download a flashing tool.** [BalenaEtcher](https://www.balena.io/etcher/) is a good, cross-platform option that works on Windows, macOS, and Linux.
2.  **Open BalenaEtcher.**
3.  Select **"Flash from file"** and choose the `.iso` file you downloaded.
4.  Select **"Select target"** and choose your USB drive. 

::: danger
**Be very careful to select the correct drive.** Flashing will erase all data on the selected drive.
:::

5.  Click **"Flash!"** and wait for the process to complete.

## 2. Boot from the USB Drive

You need to tell your computer to start from the USB drive instead of its internal hard drive.

1.  **Insert the bootable USB drive** into your computer.
2.  **Restart or turn on the computer.**
3.  **Enter the BIOS/UEFI setup.** As the computer starts, press a specific key to enter the setup menu. Common keys are `F2`, `F10`, `F12`, `Del`, or `Esc`. The correct key is often displayed on the screen during startup, or can be found in your motherboard/laptop manual. Just google "how to enter BIOS [your computer model]" if you're unsure.
4. **Disable Secure Boot if necessary.** Some systems have something called "Secure Boot" enabled by default. Secure Boot checkes that the operating system is trusted before allowing it to boot. Many Linux distributions can work with Secure Boot, but if you encounter issues booting from the USB, you may need to disable it in the BIOS/UEFI settings. Look for a "Secure Boot" option and set it to "Disabled". It is also recommended to disable "Fast Boot" if present.

5.  **Change the boot order.** In the BIOS/UEFI menu, find the "Boot" or "Boot Order" section. Move the USB drive to the top of the list.
6.  **Save and Exit.** Your computer will now restart and boot from the USB drive.


::: warning
This installation guide assumes you are installing Linux on a computer that already has an operating system (like Windows) installed. If you are installing Linux on a new computer or one without an OS, the steps may vary slightly.
:::


## 3. The Installation Process

Installation will vary slightly between distributions, but the general process is similar. Below are the steps for installing Ubuntu, which is also representative of many other distributions.

1.  **Try or Install:** You will typically see an option to "Try Ubuntu" or "Install Ubuntu".
    *   **Try Ubuntu:** This loads a "live" version of the OS from the USB drive without making any changes to your computer. It's a great way to see if you like it and check for hardware compatibility (especially check for ethernet, wifi and bluetooth).
    *   **Install Ubuntu:** This starts the installation process.

2.  **Follow the On-Screen Instructions:** The installer will guide you through the following steps:
    *   **Language and Keyboard Layout:** Choose your preferred language and keyboard layout.
    *   **Updates and other software:** It's recommended to check "Download updates while installing" and "Install third-party software".
    *   **Installation Type:** This is the most critical step.
        *   **Erase disk and install Ubuntu:** This will delete everything on your hard drive and install Ubuntu as the only operating system. **Use this only if you have backed up your data and want to dedicate the entire computer to Linux.**
        *   **Install Ubuntu alongside [Other OS]:** If you have another OS (like Windows) installed, this option will appear. It automatically resizes your existing partitions to make space for Linux, setting up a so called "dual-boot" system.
    *   **Location:** Select your timezone.
    *   **User Creation:** Create your user account by providing your name, a computer name, a username, and a password.

The installer will now copy files and install the system. This may take some time.

## 4. First Boot

Once the installation is complete, you will be prompted to restart your computer.

1.  Remove the USB drive when prompted.
2.  Press `Enter`.
3.  Your computer will boot into your new Linux installation. Log in with the username and password you created.

Congratulations, you have successfully installed Linux! Your first step should be to check for and install any available software updates. You can usually do this through a graphical "Software Updater" application or by running the following commands in a terminal:

::: code-group
```bash [Debian / Ubuntu]
sudo apt update && sudo apt upgrade
```
```bash [Arch]
sudo pacman -Syu
```
```bash [Fedora]
sudo dnf upgrade
```
:::