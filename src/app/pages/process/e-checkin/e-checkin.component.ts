import { Component, OnInit } from '@angular/core';
import { Utility } from 'src/app/share/utility';
declare var jQuery:any;
@Component({
  selector: 'app-e-checkin',
  templateUrl: './e-checkin.component.html',
  styleUrls: ['./e-checkin.component.css']
})
export class ECheckinComponent implements OnInit {
  _util:Utility = new Utility();
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._util.getScreenResize(jQuery);
  }

}
