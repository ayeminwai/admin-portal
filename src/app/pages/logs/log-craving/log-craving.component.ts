import { Component, OnInit } from '@angular/core';
import { Utility } from 'src/app/share/utility';
declare var jQuery:any;

@Component({
  selector: 'app-log-craving',
  templateUrl: './log-craving.component.html',
  styleUrls: ['./log-craving.component.css']
})
export class LogCravingComponent implements OnInit {
  _util: Utility = new Utility();
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._util.getScreenResize(jQuery);
  }
}
