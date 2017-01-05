import { Component } from '@angular/core';
import { IntegrationService } from './services/integration.service';
// import { app } from 'electron';
// const { app, BrowserWindow } = require('electron');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  renderer: Electron.IpcRenderer;
  main: Electron.BrowserWindow;
  constructor(private integrationService: IntegrationService) {
    let electron = integrationService.getElectron();
    this.renderer = electron.ipcRenderer;
    this.main = electron.remote.getCurrentWindow();
    this.renderer.on('closedd', () => {
      alert('haha');
    })
  }
  clickButton() {
    this.renderer.send('quitss');
    this.main.emit('quitss');
    // this.main.webContents.send('quitss');
    // this.renderer.sendToHost('quitss');
    console.log(this.renderer.listeners.length);

  }
}
