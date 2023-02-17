# 🎉 Ping-pong counter


## 🎯 Short description
 I sometimes get angry when I play table tennis with my younger brother and ✨accidentally forget actual score✨. It's **really** frustrating. And I came up with idea - why not create some kind of AI that - based on voice - saves state of game. Really, much simpler than remembering game score. *MuCh SiMpLeR.*


## 🔰 Features

**Status meaning:** <br>
🟢 -> Ready to use and working <br>
🟡 -> In development <br>
🟠 -> Planned for the close future <br>
🔴 -> Planned for the future <br>
⛔ -> In mind, but have nearly no idea how to achieve

| Status |      Feature                |    Description    |
|:------:|:----------------------------|:------------------|
|   🟡   | Electron based app          | 🦺 Main app UI (User Interface) - displaying points etc., in electron (browser-based framework) |
|   🟡   | In-app updater              | ⚙️ Automatically update app - so it can use latest features all time |
|   🟡   | Voice-based point counters  | 🗣️ Detecting voice commands from specific user to add and decrease points (in my neural network - in Polish language) |
|   🟠   | Current turn                | 🎯 Show who should serve now - based on choosen amount of serves per person |
|   🟠   | End of game                 | 🛑 Show that it's end of the game when scored choosen amount of points |
|   🟠   | Timer                       | ⌚ Game time |
|   🟠   | Voice-based timer control   | ⏲️ Detecting voice commands to start and pause game |
|   🔴   | GTK based app               | 👕 App UI in GTK and libadwaita - for nice gnome desktop styling and integration |
|   ⛔   | Self-adjusting              | 🔥 Send some microphone data to Edge Impulse servers, then redownload re-trained and adjusted model |
|   ⛔   | Full self-arbitration       | 📸 Use camera looking at ball and microphone ball noices for auto points adjusting |


## 🛠️ Running on your own

****
⚠️ **Disclaimer:** Linux 64-bit or ARM64 machine running **Ubuntu**, **Fedora**, **Arch Linux** or **Raspberry Pi OS** is needed to run project <br> 
✅ ***Psst**, you can use Raspberry Pi 3/4 board with 64-bit OS if you have one or, if not, use my custom **[Arch live ISO](https://github.com/LukeMech/CustomArch)** that includes **all needed packages** and latest code (**no installation needed - just boot from USB**)*

****

**Create Edge Impulse AI model:**
- Build your own machine learning model using **[Edge Impulse](https://edgeimpulse.com)** (for now, use `environment` label for any voice or noice samples, `user1_up` and `user1_down` for user 1 up/down points voice samples, `user2_up` and `user2_down` for user 2 up/down points voice samples)
- Generate `.eim` file (enable **Show linux deploy options** under *Administrative zone* on the project dashboard and from **Deployment** menu choose Linux -> **x86** for PC and **AArch64** for Raspberry) and download it

**Run app:**
- Get latest app from **[releases](https://github.com/LukeMech/Ping-Pong_Counter/releases/latest)** (look for `.AppImage` file with your architecture, for **PC** use **x86_64** and for **Raspberry** use **arm64**)
- Copy your `.eim` file to `Downloads/AIModel` folder and name it `model.eim`
- Create blank file `do-not-update.txt` inside your `AIModel` folder, this will prevent model from being overwritten
- Make sure libfuse2 is installed (`sudo apt install libfuse2` on RPi OS)
- Set execution permissions (`chmod +x *.AppImage`) and run
