const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Cria uma janela de navegação.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    show:false,
    webPreferences: {
      nodeIntegration: true
      
    }
  })

  
  // e carregar o index.html do aplicativo.
  win.loadFile('index.html')
  
  win.once("ready-to-show", ()=>{
    win.show();
  })

}

app.whenReady().then(createWindow)
