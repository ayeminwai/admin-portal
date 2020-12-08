import { Component, HostListener, OnInit } from '@angular/core';
import { Utility } from 'src/app/share/utility';
declare var jQuery: any;
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  _util: Utility = new Utility();
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._util.getScreenResize(jQuery);
  }

}
