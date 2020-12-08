import { Component, OnInit } from '@angular/core';
import { Utility } from 'src/app/share/utility';
declare var jQuery:any;

@Component({
  selector: 'app-log-feelings',
  templateUrl: './log-feelings.component.html',
  styleUrls: ['./log-feelings.component.css']
})
export class LogFeelingsComponent implements OnInit {
  _util: Utility = new Utility();
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._util.getScreenResize(jQuery);
  }

}
