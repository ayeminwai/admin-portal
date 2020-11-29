import { Component, HostListener, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  scrHeight:any;
  scrWidth:any;
  constructor() { }

  ngOnInit(): void {

    jQuery(document).ready(function(e) {
      
    });
  }

  clickToggle(){
    const bd = document.querySelector('body');
    if(bd.classList.contains('show-sidebar')){
      bd.classList.remove("show-sidebar");
    } else {
      bd.classList.add("show-sidebar");
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log(this.scrHeight, this.scrWidth);
  }

}
