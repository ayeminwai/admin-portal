import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Util, Oauth} from '../../share/util.enum';
import { SessionService } from './session.service';
import { Observable } from 'rxjs';
import { Utility } from '../../share/utility';
import { Intercom } from 'src/app/share/intercom';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  _util: Utility = new Utility();
  constructor(public http: HttpClient, private session: SessionService, private ic: Intercom) { }

  login(username: string, password: string) {
    return this.authenticate({ username, password, grant_type: Util.GRANT_TYPE });
  }

  refresh(token: string) {
    return this.authenticate({ token, grant_type: Util.GRANT_TYPE })
  }

  authenticate(body: any) {
    return this.http.post<any>(this.ic.getApiUrl() + Oauth.TOKEN, this._util.authOption(body)).pipe(
      map(data => {
        console.log(JSON.stringify(data));
        this.session.setToken(data);
        return data;
      })
    );
  }

  getRefreshToken() {
    return this.session.getRefreshToken();
  }

  apiCall(url: string, data: Object): Observable<any> {
    return this.http.post(this.ic.getApiUrl() + url, this.setDateTime(data));
  }

  setDateTime(obj : Object){
    let _obj:string = JSON.stringify(obj);
    return _obj["reqDateTime"] = this.session.getDateTime();
  }
}
