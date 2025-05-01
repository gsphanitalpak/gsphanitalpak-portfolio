export const blogs = [
  {
    id: 1,
    title: 'Setting Up a Headless Raspberry Pi with VNC',
    date: '2025-04-29',
    image: 'blog/headless-pi-vnc.png',
    excerpt: 'Learn how to set up your Raspberry Pi without a monitor or keyboard using VNC for remote desktop access.',
    content: `# Setting Up a Headless Raspberry Pi with TigerVNC for Remote Access
If you're someone who loves working on Raspberry Pi projects but doesn't want to keep a monitor and keyboard attached — that defeats the portability of the Pi — then setting up your Raspberry Pi in "headless" mode is the way to go. In this guide, I'll walk you through setting up your Raspberry Pi without a monitor and configuring TigerVNC for remote access. This allows you to access the Raspberry Pi's desktop environment from any device on the same network.

## Why Headless?

A headless Raspberry Pi setup means you're running the Raspberry Pi without a monitor, mouse, or keyboard. This is incredibly useful for projects where you don't need to interact with the Pi directly, such as when it's used as a server or IoT device. Plus, it helps reduce clutter and makes your setup more portable.

## Prerequisites

Before starting, ensure you have the following:

- A Raspberry Pi (Raspberry Pi 4, 3, or Zero).
  *Any suitable Pi model works.*
- MicroSD card (8GB or more) with Raspberry Pi OS.
- MicroSD card with a compatible adapter or reader for PC/laptop connectivity.
- Power supply for the Raspberry Pi.
- A device (PC or Mac) to access the Raspberry Pi remotely.

---

## Step 1: Preparing the Raspberry Pi MicroSD Card

1. **Download Raspberry Pi Imager**: Head to the official Raspberry Pi website and install it on your computer. Launch the Imager.

2. **Select the correct board**
*(Tip: If you are not sure of the board model, check on the Pi board — it should be printed as shown).*

3. **Enable SSH for Remote Access by OS Customisation**
To set up your Pi headless, you'll need SSH (Secure Shell) access. After selecting the correct board and filling up the OS Customisation, make a note of the following:
- **Hostname** assigned to the Pi *(required for IP of the Pi if you are working with multiple devices connected to the network)*
- **Username and Password** *(These are required for authentication to access the remote SSH)*
- **Enable SSH**: In the Services tab, toggle the **Enable SSH** with password authentication. *(Password authentication is recommended instead of public-key authentication for beginners.)*

4. Leave the Options tab as default and click **SAVE**. The OS Customisation menu will close.

5. Then select the storage device *(microSD card — this is also called the Boot media).*
> **NOTE:** The boot media will be formatted and then the OS will be etched onto it.

6. The final step of setting up the boot media is to click **WRITE** and wait for the process to be completed.

---

## Step 2: Booting the Raspberry Pi

- Remove the power cord from the Pi *(if connected).*
> **NOTE:** Always make connections to the Pi only when it's not connected to any power.

- Insert the MicroSD card into the Pi and power it ON.

---

## 🔓 Step 3: Enabling VNC

After successful booting of the Pi:

- You can check this with the LED indicators on the Pi:
- **PWR LED**: Solid red
- **ACT LED**: Blinking green

1. Open Terminal (on macOS) or Command Prompt (on Windows).
*(TIP: Open Command Prompt as an administrator for smooth execution.)*

2. Run:
\`\`\`bash
ping -4 <pi-local-hostname>
\`\`\`

This returns the IP address of the Pi.
*Let's say it returned \`192.168.2.1\`*

3. Type:
\`\`\`bash
ssh <username>@<ip-address>
\`\`\`

Example:
\`\`\`bash
ssh pi@192.168.2.1
\`\`\`

4. This prompts for a password *(this is the password set in the General tab of OS Customisations).*

5. You will now see the Pi terminal *(the prompt changes from your local machine to the Pi)*:
\`\`\`bash
pi-001@raspberrypi$
\`\`\`

6. Run:
\`\`\`bash
sudo raspi-config
\`\`\`

7. Navigate to **Interfaces** using the down arrow, then hit **Enter**.

8. Inside Interfaces, look for **VNC** and enable it with Enter.

9. To return back, use **Tab** to go to the **Finish** button and hit **Enter**.

Now the Pi is ready to be connected to a VNC viewer.

---

## Step 4: Connecting VNC Viewer (TigerVNC)

1. Download any VNC viewer on your system *(here we're using TigerVNC viewer).*
> To download, head to your browser and search *"VNC viewer download"* and choose any VNC Viewer application.

2. Launch the application.

3. You will be asked to enter the IP address.
> If you haven't noted it down, you can use:
\`\`\`bash
ping -4 <pi-local-hostname>
\`\`\`

to get the IP address of the Pi.

4. Enter the IP in the VNC viewer application. It will prompt you for the **username** and **password**
*(these are the same as the ones set in the General tab of OS Customisations).*

---

That's it! 🎉
Now you will be able to see the Pi desktop on your local machine. You can run commands, start to tinker, and learn more.`,
  },
];
