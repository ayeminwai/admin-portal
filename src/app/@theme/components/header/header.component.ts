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

  }

  clickToggle(){
    const bd = document.querySelector('body');
    if(bd.classList.contains('show-sidebar')){
      bd.classList.remove("show-sidebar");
    } else {
      bd.classList.add("show-sidebar");
    }
  }

}
