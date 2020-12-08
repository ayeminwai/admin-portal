import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Intercom } from '../share/intercom';
import { environment } from 'src/environments/environment';
import { SessionService } from '../core/services/session.service';
import { BackendApiService } from '../core/services/backend-api.service';
import { MsgType } from '../share/util.enum';
import { Utility } from '../share/utility';
declare var SHA256: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  _util: Utility = new Utility();
  user: any = { "name": "", "password": "", "remember_me": false };
  focus: any = 'one';
  constructor(private session: SessionService, private http: BackendApiService, private _router: Router, private ic: Intercom) {
    session.logout();

    if (session.getUser()) {
      this.user = { "name": session.getUser(), "password": "", "remember_me": true };
    }

    this.ic._apiurl = environment.URL;
  }

  ngOnInit(): void {}

  onKeydown(event:any){
    if (event.key === "Enter") {
      this.oauth();
    }
  }

  dateTesting(){
    console.log(JSON.stringify(this._util.getSystemDate("Asia/Singapore")));
    console.log(JSON.stringify(this._util.getSystemDate("Etc/UTC")));
  }

  oauth() {
    this.dateTesting();
    if (this.isValid()) {
      this.http.login(this.user.name, SHA256(this.user.password).toUpperCase()).subscribe(
        data => {
          let _self = this;
          if (_self.user.remember_me == true)
          _self.session.setUser(_self.user.name);
            else
            _self.session.removeUser();
          _self._router.navigate(['/pages/dashboard']);
          _self.ic.showMessage(MsgType.INFO, 'Login Successfully.');
        }
      );
      
    }
  }

  checkChange(e: any) { this.user.remember_me = e.target.checked; }

  isValid() {
    if (this.user.name == '' && this.user.password == '')
      this.ic.showMessage(MsgType.WARN, 'Invalid user name and password');
    else if (this.user.name == '')
      this.ic.showMessage(MsgType.WARN, 'Invalid user name');
    else if (this.user.password == '')
      this.ic.showMessage(MsgType.WARN, 'Invalid password');
    else
      return true;
    return false;
  }
}
