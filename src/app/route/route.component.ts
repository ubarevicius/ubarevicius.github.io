import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {
  private tiles;
  constructor() { }

  ngOnInit() {
    this.tiles = [
      { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
      { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
      { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
      { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
    ];
  }

}
