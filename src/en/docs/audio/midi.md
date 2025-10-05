# MIDI keyboards

MIDI keyboards *should* work out of the box.

## Tools

Useful tools used in this guide.

::: code-group

```sh [Debian]
apt install usbutils alsa-utils
```

```sh [Arch]
pacman -Syu usbutils alsa-utils
```

```sh [Nix]
nix shell nixpkgs#{usbutils,alsa-utils}
```

:::

## Check connection

Check USB connection using `lsusb` from [`usbutils`](http://www.linux-usb.org/)

```console
$ lsusb
Bus 001 Device 012: ID 0499:1718 Yamaha Corp. Digital Piano
```

Check if it gets recognized as a MIDI device using `aconnect` from
[`alsa-utils`](http://www.alsa-project.org/)

```console
$ aconnect -i
 client 0: 'System' [type=kernel]
     0 'Timer           '
     1 'Announce        '
 client 14: 'Midi Through' [type=kernel]
     0 'Midi Through Port-0'
 client 24: 'Digital Piano' [type=kernel,card=2]
     0 'Digital Piano MIDI 1'
     1 'Digital Piano MIDI 2'
```

Check MIDI events using `aseqdump`, also from `alsa-utils`.

```console
$ aseqdump -p 24 # this is the client number from the previous command
24:0   Active Sensing
24:0   Active Sensing
24:0   Active Sensing
24:0   Note on                 0, note 96, velocity 74
24:0   Active Sensing
24:0   Note off                0, note 96, velocity 64
24:0   Active Sensing
24:0   Active Sensing
```

::: tip
You can also use `qpwgraph` to visually see the MIDI and audio nodes.
:::

## Audio

Some MIDI keyboards also send audio to the computer, you should be able to see
it as a regular audio device.

You can also listen to your computer's audio in your keyboard's speakers, you
just need to select your keyboard as audio output. Most Desktop Environments
have an option to change the audio output device, but you can also use
`pavucontrol`.

::: info
Audio input/output devices from my Yamaha p-125 appears simply as "Digital
Piano", so look for something like that.
:::

## Playing and recording MIDI

To play a `.mid` file on your MIDI device, you can use `aplaymidi`
from `alsa-utils`

```console
$ aplaymidi -l
 Port    Client name                      Port name
 14:0    Midi Through                     Midi Through Port-0
 24:0    Digital Piano                    Digital Piano MIDI 1
 24:1    Digital Piano                    Digital Piano MIDI 2
```

```sh
aplaymidi -p 24:0 path/to/song.mid
```

To record MIDI you can use a [Digital Audio Workstation](https://wiki.archlinux.org/title/List_of_applications/Multimedia#Digital_audio_workstations).

But for simple use cases you can try `arecordmidi` from
`alsa-utils`.

```sh
arecordmidi -p 24:0 path/to/output.mid # then press CTRL-C to stop
```

## MIDI Visualizers

The most convenient solution would be to use a web application that uses the
[web MIDI API](https://www.w3.org/TR/webmidi/). However, we can't access the
API in an OBS browser source as of now...

- https://github.com/obsproject/obs-browser/issues/195.

So for now we're stuck at either using another API to receive MIDI events or a
native application.

### Web

- proof-of-concept with `obs-websocket`: https://github.com/h-banii/midi-visualizer-js

### Native

::: warning
Under construction...
:::

## Resources

- [Ted's Linux MIDI Guide](http://tedfelix.com/linux/linux-midi.html)
- [Arch Wiki - USB_MIDI keyboards](https://wiki.archlinux.org/title/USB_MIDI_keyboards)
