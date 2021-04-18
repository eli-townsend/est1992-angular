import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'est-workshop-blurb',
  templateUrl: './workshop-blurb.component.html',
  styleUrls: ['./workshop-blurb.component.scss']
})
export class WorkshopBlurbComponent implements OnInit {

  @Input() projectTitle: string;
  @Input() projectTag: string;
  @Input() projectLink: string;
  @Input() projectImgSrc: string;
  @Input() projectImgAlt: string;

  constructor() { }

  ngOnInit(): void {
  }

}
