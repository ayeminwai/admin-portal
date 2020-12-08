import { Component, OnInit } from '@angular/core';
import { Utility } from 'src/app/share/utility';
declare var jQuery:any;
@Component({
  selector: 'app-m-checkin',
  templateUrl: './m-checkin.component.html',
  styleUrls: ['./m-checkin.component.css']
})
export class MCheckinComponent implements OnInit {
  _util:Utility = new Utility();
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._util.getScreenResize(jQuery);
  }

}
