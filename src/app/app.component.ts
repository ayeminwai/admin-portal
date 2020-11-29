import { Component } from '@angular/core';
import { Intercom } from './share/intercom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-portal';
  constructor(private ic: Intercom) { 

    ic.rpbean$.subscribe(x => {
      if (x.t1 != null && x.t1 == "rp-showsidebar") {

      } else if (x.t1 !== null && x.t1 == "rp-confirm") {

      }
    })
  }


}
