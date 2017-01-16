import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-angular-meets-electron',
  templateUrl: './angular-meets-electron.component.html',
  styleUrls: ['./angular-meets-electron.component.css']
})
export class AngularMeetsElectronComponent implements OnInit {
  @Input() isSummary: boolean;
  constructor() { }

  ngOnInit() {
  }

}
