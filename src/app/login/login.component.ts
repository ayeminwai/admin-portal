import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = { "name": "", "password": "", "remember_me": false };
  focus: any = 'one';
  constructor(private _router: Router) {

  }

  ngOnInit(): void {
  }

  onKeydown(event:any){
    if (event.key === "Enter") {
      this.oauth();
    }
  }

  oauth() {
    if (this.isValid()) {
      this._router.navigate(['/pages/dashboard']);
    }
  }

  checkChange(e: any) { this.user.remember_me = e.target.checked; }

  isValid() {
    if (this.user.name == '' && this.user.password == '')
      console.log("error")
    else if (this.user.name == ''){
      console.log("error")
    }
    else if (this.user.password == '')
      console.log("error")
    else
      return true;
    return false;
  }
}
