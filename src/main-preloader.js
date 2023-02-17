const ipcRenderer = require('electron').ipcRenderer;
const version = require('../package.json').version

document.title.replace('{version}', version)

// const AIAvailable = ipcRenderer.send('ask-for-AI')

ipcRenderer.on('update-info', (event, info) => {
  const updateStatus = document.getElementById('upd-info').innerHTML

  if(info == 'uptodate') updateStatus = 'Already up to date'
  else if(info == 'downloading') updateStatus = 'Downloading update...'
  else if(info == 'error') updateStatus = `Can't check updates`
  else if(info == 'readytoinstall') updateStatus = 'Restart to apply'
  
})