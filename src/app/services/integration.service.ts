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
}