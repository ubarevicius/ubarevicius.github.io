import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
declare let hljs: any;
@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit, AfterViewInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() content: string;
  @Input() isSummary: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    hljs.initHighlighting.called = false;
    hljs.initHighlighting();
  }

}
