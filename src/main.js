const { app, BrowserWindow, ipcMain } = require('electron')
const { autoUpdater } = require('electron-updater');
const fs = require('fs');
const path = require('path')
autoUpdater.autoDownload = false

let mainWin
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'js/preloader.js'),
      nodeIntegration: true
    },
    show: false
  })

  win.setTitle(`🏓 Ping-pong counter ${require('../package.json').version}`);
  win.maximize()
  win.loadFile(path.join(__dirname, 'html/index.html'))

  win.once('ready-to-show', () => {
    win.show()
  })
}

app.whenReady().then(() => {createWindow()})

ipcMain.on('hello', (event) => {

  mainWin = event.sender

})

autoUpdater.on('update-available', () => { 
  autoUpdater.downloadUpdate()
  mainWin.send('update-info', 'downloading')
})
autoUpdater.on('update-not-available', () => { mainWin.send('update-info', 'up-to-date'); console.log('xd')})
autoUpdater.on('error', () => {   mainWin.send('update-info', 'error')})
autoUpdater.on('update-downloaded', () => {   mainWin.send('update-info', 'ready-to-install')})