import {app, BrowserWindow} from 'electron';
import path from 'path';
import { isDev } from './util.js';


app.on("ready", ()=>{
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 700,
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
        },
    });    

    if(isDev()){                
        mainWindow.loadURL('http://localhost:5173');
        mainWindow.webContents.openDevTools();
    }else{
        mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'))
    }
})