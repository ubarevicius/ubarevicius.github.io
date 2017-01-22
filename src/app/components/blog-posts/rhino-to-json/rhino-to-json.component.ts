import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rhino-to-json',
  templateUrl: './rhino-to-json.component.html',
  styleUrls: ['./rhino-to-json.component.css']
})
export class RhinoToJsonComponent implements OnInit {
  @Input() isSummary: boolean;
  indexHtml: string;

  constructor() {
  
  }

  ngOnInit() {

  }

}
