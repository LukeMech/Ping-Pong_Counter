const { app, BrowserWindow, ipcMain } = require('electron')
const { autoUpdater } = require('electron-updater');
const fs = require('fs');
const path = require('path')
const { AudioClassifier, LinuxImpulseRunner, AudioRecorder } = require("edge-impulse-linux");

let mainWin
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preloader.js'),
      nodeIntegration: true
    },
    show: false
  })

  win.setTitle(`🏓 Ping-pong counter ${require('../package.json').version}`);
  win.maximize()
  win.loadFile(path.join(__dirname, 'index.html'))

  autoUpdater.checkForUpdates()

  win.once('ready-to-show', () => {
    win.show()
  })
}

app.whenReady().then(() => {createWindow()})

ipcMain.on('ask-for-AI', (event) => {

  mainWin = event.sender

  if (fs.existsSync(path.join(app.getPath("downloads"), "AIModel", "model.eim"))) {
    event.returnValue = true
  } 
  else {
    event.returnValue = false
  }
})

autoUpdater.on('update-available', () => { 
  autoUpdater.downloadUpdate()
  mainWin.send('update-info', 'downloading')
})
autoUpdater.on('update-not-available', () => { mainWin.send('update-info', 'uptodate'); console.log('xd')})
autoUpdater.on('error', () => {   mainWin.send('update-info', 'error')})
autoUpdater.on('update-downloaded', () => {   mainWin.send('update-info', 'readytoinstall')})