import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuname : String = "dashboard";
  constructor() { 
    this.menuname = "dashboard";
  }

  ngOnInit(): void {
  }

  checkActive(menu : string) {
    console.log(JSON.stringify(menu))
    this.menuname = menu;

    console.log(JSON.stringify(this.menuname))
  }

}
