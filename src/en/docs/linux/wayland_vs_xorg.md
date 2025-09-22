# Wayland vs. Xorg/X11

For a long time, Linux has used something called **Xorg** (X11) to power its desktop graphics. It worked well enough, but it was designed decades ago - long before modern features like variable refresh rate (VRR), and multi-monitor setups were common. Because of this, X11 has some limitations. For example, if you plug in two monitors with different refresh rates (say 120 Hz and 60 Hz), both monitors will get locked to the lower one. Multi-monitor support in general is more of a workaround than true support.

**Wayland** is the newer system built to replace X11. It’s designed for modern hardware and fixes many of these old problems. With Wayland:

- Monitors with different refresh rates work properly side by side.
- Variable refresh rate is supported.
- Multi-monitor setups are handled cleanly, without old hacks.

This makes Wayland the better option for most people moving forward.

That said, it’s not perfect yet. Some features can still be tricky. For example, global hotkeys (shortcuts that work even when an app isn’t active) don’t always behave as expected, unless your desktop environment or window manager supports them. Also, NVIDIA graphics cards have historically had weaker support on Wayland compared to AMD, though NVIDIA has been improving quickly.

Usually, this doesn't need to be tinkered with too much. Most Linux distributions let you choose between X11 and Wayland at the login screen. If you run into issues with one, you can switch to the other without much hassle. 