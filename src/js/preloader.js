const ipcRenderer = require('electron').ipcRenderer;

ipcRenderer.send('hello')

ipcRenderer.on('update-info', (event, info) => {
  const updateStatus = document.getElementById('upd-info')

  if(info == 'up-to-date') updateStatus.innerHTML = '✅ Already up to date'
  else if(info == 'downloading') updateStatus.innerHTML = '☁️ Downloading update...'
  else if(info == 'error') updateStatus.innerHTML = `❌ Can't check updates`
  else if(info == 'ready-to-install') updateStatus.innerHTML = '🔁 Restart to apply'
  else if(info == 'not-applicable') updateStatus.innerHTML = `⚠️ Can't update, not using AppImage`
})