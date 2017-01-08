import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-arc-innovation-award-tech-innovation',
  templateUrl: './arc-innovation-award-tech-innovation.component.html',
  styleUrls: ['./arc-innovation-award-tech-innovation.component.css']
})
export class ArcInnovationAwardTechInnovationComponent implements OnInit {
  @Input() isSummary: boolean;
  constructor() { }

  ngOnInit() {
  }

}
