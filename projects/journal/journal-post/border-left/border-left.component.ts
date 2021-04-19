import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-border-left',
  templateUrl: './border-left.component.html',
  styleUrls: ['./border-left.component.scss']
})
export class BorderLeftComponent implements OnInit {
  borderLeftHTML = `
  <input type="text" placeholder="placeholder text" class="required">
  <input type="text" placeholder="placeholder text" required> 
  `
  
  borderLeftCSS = `
    input.required, select.required, textarea.required, input:required, select:required, textarea:required {
      border-left:#E96751 solid 3px;
      -webkit-transition: border 0.3s;
      transition: border 0.3s;
    }
    
    input[type=text].required:focus, input[type=date].required:focus, select.required:focus, textarea.required:focus{
      border-left:#E96751 solid 6px;
    }
  `


  constructor() { }

  ngOnInit(): void {
  }

}
