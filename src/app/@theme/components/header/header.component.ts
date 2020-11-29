import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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

}
