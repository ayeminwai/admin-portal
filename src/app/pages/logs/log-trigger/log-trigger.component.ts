import { Component, OnInit } from '@angular/core';
import { Utility } from 'src/app/share/utility';
declare var jQuery:any;
@Component({
  selector: 'app-log-trigger',
  templateUrl: './log-trigger.component.html',
  styleUrls: ['./log-trigger.component.css']
})
export class LogTriggerComponent implements OnInit {
  _util:Utility = new Utility();
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._util.getScreenResize(jQuery);
  }

}
