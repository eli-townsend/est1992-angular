import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'est-blog-blurb',
  templateUrl: './blog-blurb.component.html',
  styleUrls: ['./blog-blurb.component.scss']
})
export class BlogBlurbComponent implements OnInit {

  @Input() blogTitle: string;
  @Input() blogDate: string;
  @Input() blogBlurb: string;
  @Input() blogArticle: string;


  constructor() { }

  ngOnInit(): void {
  }

}
