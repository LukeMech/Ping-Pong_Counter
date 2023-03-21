# 🎉 Ping-pong counter

## ⚠️ Important notice
App under giant rebuild, I found a lot easier and -for this type of app - better way to detect voice, so instead of using AI I'll just use voice recognition.

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
|   🟢   | Auto app updater            | ⚙️ Automatically update app - so it can use latest features all time |
|   🟡   | Voice-based point counters  | 🗣️ Detecting voice commands from specific user to add and decrease points |
|   🟠   | Current turn                | 🎯 Show who should serve now - based on chosen amount of serves per person |
|   🟠   | End of game                 | 🛑 Show that it's the end of the game when scored chosen amount of points |
|   🟠   | Timer                       | ⌚ Game time |
|   🟠   | Voice-based timer control   | ⏲️ Detecting voice commands to start and pause the game |
|   🔴   | GTK based app               | 👕 App UI in GTK and libadwaita - for nice gnome desktop styling and integration |
|   ⛔   | Self-adjusting              | 🔥 Send some microphone data to Edge Impulse servers, then redownload re-trained and adjusted model |
|   ⛔   | Full self-arbitration       | 📸 Use camera looking at ball and microphone ball noices for auto points adjusting |


## 🛠️ Running on your own

**Run app:**
- Get latest app from **[releases](https://github.com/LukeMech/Ping-Pong_Counter/releases/latest)** (look for `.AppImage` or `.exe` file with your architecture, for **PC** use **x86_64** and for **Raspberry** use **arm64**)
- Set execution permissions (`chmod +x *.AppImage`) and run
