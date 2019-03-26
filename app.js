const {app, BrowserWindow} = require('electron')

function createMainWindow(){
    window = new BrowserWindow({width: 800, height: 600})
    window.loadFile('main.html')
}

app.on('ready', createMainWindow)
