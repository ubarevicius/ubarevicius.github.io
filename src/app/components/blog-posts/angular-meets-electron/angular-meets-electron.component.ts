import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-angular-meets-electron',
  templateUrl: './angular-meets-electron.component.html',
  styleUrls: ['./angular-meets-electron.component.css']
})
export class AngularMeetsElectronComponent implements OnInit {
  @Input() isSummary: boolean;
  indexHtml: string;
  integrationService: string;
  appComponent: string;
  appComponentTemplate: string;
  electronCode: string;
  constructor() {
    this.indexHtml = `
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Angular meets Electron</title>
  <script>
    document.write('<base href="' + document.location + '" />');
    var electron = require('electron');
  </script>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root>Loading...</app-root>
</body>
</html>
    `

    this.integrationService = `
import { Injectable } from '@angular/core';

declare var electron: Electron.ElectronMainAndRenderer;

@Injectable()
export class IntegrationService {
    electron: Electron.ElectronMainAndRenderer;
    constructor(){
        this.electron = electron;
    }

    getElectron(): Electron.ElectronMainAndRenderer{
        return this.electron;
    }
}`;

    this.appComponent = `
import { Component, ApplicationRef } from '@angular/core';
import { IntegrationService } from './services/integration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  renderer: Electron.IpcRenderer;
  main: Electron.BrowserWindow;
  messageFromElectron: string;

  constructor(private integrationService: IntegrationService, private appRef: ApplicationRef) {
    let electron = integrationService.getElectron();
    this.renderer = electron.ipcRenderer;
    this.main = electron.remote.getCurrentWindow();
    this.renderer.on('sendHiToAngular', () => {
      this.messageFromElectron = 'Electron says hi to Angular';
      this.appRef.tick();
    })
  }

  clickButton() {
    this.main.emit('sendHelloToElectron');
  }
}
`
    this.appComponentTemplate = `
<div class="col-xs-12">
    <h1>Angular meets Electron</h1>

    <h2>{{messageFromElectron}}</h2>

    <router-outlet></router-outlet>

    <button (click)="clickButton()">Send message to electron</button>
</div>
`

this.electronCode = `
const electron: Electron.ElectronMainAndRenderer = require('electron');

var environment = process.env.ELECTRON_ENV;
if (environment === 'development') {
  require('electron-reload')(__dirname);
}

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow: Electron.BrowserWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  mainWindow.loadURL('file://${__dirname}/index.html');

  setTimeout(() => {
    mainWindow.webContents.send('sendHiToAngular');
  }, 4000);

  mainWindow.on('sendHelloToElectron', () => {
    console.log('Angular says hello to Electron!');
  });

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
`
  }

  ngOnInit() {

  }

}
