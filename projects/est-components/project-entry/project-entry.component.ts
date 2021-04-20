import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-entry',
  templateUrl: './project-entry.component.html',
  styleUrls: ['./project-entry.component.scss']
})
export class ProjectEntryComponent implements OnInit {

  @Input() projectTitle: string;
  @Input() projectLink: string;
  @Input() projectLinkName: string;
  @Input() projectYear: string;
  @Input() projectColorOne: string;
  @Input() projectColorTwo: string;
  @Input() projectColorThree: string;

  constructor() { }

  ngOnInit(): void {
  }

}
