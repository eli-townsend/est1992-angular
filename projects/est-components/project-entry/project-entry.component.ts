import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'est-project-entry',
  templateUrl: './project-entry.component.html',
  styleUrls: ['./project-entry.component.scss']
})
export class ProjectEntryComponent implements OnInit {

  @Input() projectTitle: string;
  @Input() projectLink: string;
  @Input() projectLinkName: string;
  @Input() projectYear: string;

  constructor() { }

  ngOnInit(): void {
  }

}
