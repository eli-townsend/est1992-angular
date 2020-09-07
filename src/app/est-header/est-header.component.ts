import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-est-header',
  templateUrl: './est-header.component.html',
  styleUrls: ['./est-header.component.scss']
})
export class EstHeaderComponent implements OnInit {
  navShow = false;
 
  navToggle() {
    this.navShow = !this.navShow;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
