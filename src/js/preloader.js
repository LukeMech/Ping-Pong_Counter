const ipcRenderer = require('electron').ipcRenderer;

// const AIAvailable = ipcRenderer.send('ask-for-AI')
ipcRenderer.send('ask-for-AI')

ipcRenderer.on('update-info', (event, info) => {
  const updateStatus = document.getElementById('upd-info')

  if(info == 'uptodate') updateStatus.innerHTML = '✅ Already up to date'
  else if(info == 'downloading') updateStatus.innerHTML = '☁️ Downloading update...'
  else if(info == 'error') updateStatus.innerHTML = `❌ Can't check updates`
  else if(info == 'readytoinstall') updateStatus.innerHTML = '🔁 Restart to apply'
})