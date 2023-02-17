const { app, BrowserWindow } = require('electron')
const path = require('path')
const preferences = require('./preferences.json')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'main-preloader.js')
    }
  })

  if(preferences.maximizeOnStartup) win.maximize()

  win.loadFile(path.join(__dirname, 'index.html'))
}

app.whenReady().then(() => {

  createWindow()

})
