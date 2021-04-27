import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'est-project-figure',
  templateUrl: './est-project-figure.component.html',
  styleUrls: ['./est-project-figure.component.scss']
})
export class EstProjectFigureComponent implements OnInit {

  @Input() estProjectFigureClasses: string;
  @Input() estProjectFigureImagePath: string;
  @Input() estProjectFigureImageAlt: string;
  @Input() estProjectFigureCaption: string;

  constructor() { }

  ngOnInit(): void {
  }

}
