const { app, BrowserWindow, ipcMain } = require('electron')
const { autoUpdater } = require('electron-updater');
const fs = require('fs');
const path = require('path')
const { AudioClassifier, LinuxImpulseRunner, AudioRecorder } = require("edge-impulse-linux");

let win
function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'main-preloader.js'),
      nodeIntegration: true
    }
  })

  win.maximize()
  win.loadFile(path.join(__dirname, 'index.html'))

  autoUpdater.checkForUpdates()
}

app.whenReady().then(() => {createWindow()})


ipcMain.on('ask-for-AI', (event) => {

  if (fs.existsSync(path.join(app.getPath("downloads"), "AIModel", "model.eim"))) {
    event.returnValue = true
  } 
  else {
    event.returnValue = false
  }

})

autoUpdater.on('update-available', () => { 
  autoUpdater.downloadUpdate()
  win.send('update-info', 'downloading')
})
autoUpdater.on('update-not-available', () => {   win.send('update-info', 'uptodate')})
autoUpdater.on('error', () => {   win.send('update-info', 'error')})
autoUpdater.on('update-downloaded', () => {   win.send('update-info', 'readytoinstall')})