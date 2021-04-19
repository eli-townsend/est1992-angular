import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flexbox-nav',
  templateUrl: './flexbox-nav.component.html',
  styleUrls: ['./flexbox-nav.component.scss']
})
export class FlexboxNavComponent implements OnInit {

  flexboxNavHTML = `
  <div id="main-navigation">
  <div id="nav-links">
  <a href="#" class="active-nav-selection">Link</a>
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#">Link</a>
  </div>
  </div>
  
  <div id="container">
  <div id="header">
  <div id="site-title">LOGO</div>
  <div id="res-nav">
  <span></span>
  <span></span>
  <span></span>
  </div>
  </div>
  `

  flexboxNavCSS = `
  #container {
    background: #FFFFFF;
    border-radius: 5px;
    height: auto;
    padding: 1em;
    color: #bfbfbf;
    font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
    font-size: 1.1rem;
    font-weight: 200;
    position: relative;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    }
    
    #header {
    width: 100%;
    margin-bottom: 5rem;
    position: fixed;
    z-index: 99999;
    }
    
    #site-title {
    font-size: 1.3rem;
    font-weight: 600;
    }
    
    #site-title > a {
    color: #bfbfbf;
    }
    
    #res-nav {
    width: 30px;
    height: 30px;
    position: fixed;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    top: 2rem;
    right: 2rem;
    z-index: 999999;
    }
    
    #res-nav span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #bfbfbf;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
    }
    
    #res-nav {
    }
    
    #res-nav span:nth-child(1) {
    top: 0px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
    }
    
    #res-nav span:nth-child(2) {
    top: 9px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
    }
    
    #res-nav span:nth-child(3) {
    top: 18px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
    }
    
    #res-nav.open span:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    top: -4px;
    left: 8px;
    }
    
    #res-nav.open span:nth-child(2) {
    width: 0%;
    opacity: 0;
    }
    
    #res-nav.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 17px;
    left: 7px;
    }
    
    #main-navigation {
    position: fixed;
    visibility: hidden;
    top: -3000px;
    left: 0;
    width: 100%;
    height: 100%;
    background: #333333;
    z-index: 99999;
    margin: 0;
    padding: 0;
    overflow: hidden;
    -webkit-transition: top 0.5s cubic-bezier(0, 0, 0.2, 1);
    -moz-transition: top 0.5s cubic-bezier(0, 0, 0.2, 1);
    -o-transition: top 0.5s cubic-bezier(0, 0, 0.2, 1);
    -ms-transition: top 0.5s cubic-bezier(0, 0, 0.2, 1);
    transition: top 0.5s cubic-bezier(0, 0, 0.2, 1);
    }
    
    #main-navigation.open {
    display: flex;
    visibility: visible;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    }
    
    #main-navigation a {
    color:#00cc66;
    text-decoration: none;
    margin-right: 0.4em;
    font-size: 2.3rem;
    font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
    }
    
    #main-navigation a:hover {
    color: #00cc66;
    background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    #CCC 10px,
    #CCC 20px
    );
    }
    
    #main-navigation > #nav-links > a.active-nav-selection {
    color: #CCC;
    }
    
    #main-navigation > #nav-links > a.active-nav-selection:hover {
    background: none;
    cursor:default;
    }
  `

  flexboxNavJS = `
  function navToggle() {
    var mainNav = document.querySelector("#main-navigation");
    var navIcon = document.querySelector("#res-nav");
    mainNav.classList.toggle("open");
    navIcon.classList.toggle("open");
    }
  `

  constructor() { }

  ngOnInit(): void {
  }

}
