import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Oauth, Util } from 'src/app/share/util.enum';
import { SessionService } from '../services';
import { json } from 'd3';
import { Utility } from 'src/app/share/utility';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  _util: Utility = new Utility();
  constructor(private session: SessionService){}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = this.session.getToken();
    
    let datetime = this._util.getSystemDate(environment.timezone);
    this.session.setDateTime(datetime);
    
    if (request.url.endsWith(Oauth.TOKEN) && request.method === 'POST') {
      request = request.clone({
            setHeaders: {
                Authorization: 'Basic ' + btoa(Util.CLIENT + ':' + Util.SECRET),
                "ReqDatetime":datetime,
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
    }else{
        if (token) {
          request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                    "ReqDatetime":datetime,
                    "Content-Type": "application/json"
                }
            });
        }
    }
    console.log(JSON.stringify(request));
    return next.handle(request);
  }
}