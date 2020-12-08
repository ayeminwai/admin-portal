import { Component, HostListener, OnInit } from '@angular/core';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuname : String = "dashboard";

  scrHeight:any;
  scrWidth:any;

  constructor() { 
    this.menuname = "dashboard";
  }

  ngOnInit(): void {
  }

  checkActive(menu : string) {
    this.menuname = menu;

    if(this.scrWidth <= 768) {
      const bd = document.querySelector('body');
      if(bd.classList.contains('show-sidebar')){
        bd.classList.remove("show-sidebar");
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
  }

  

}
