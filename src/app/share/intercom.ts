import { Subject } from 'rxjs';

export class Intercom {
    _apiurl:string = "";
    _profile = {
        "userId": 0,
        "username": "",
        "phone": "",
        "photo": "assets/img/default.jpg",
        "pagination":10
    };
    _default = {
        "photo":"assets/img/default_user.png"
    }

    private _rpbeanSource = new Subject<any>();
    rpbean$ = this._rpbeanSource.asObservable();

    showMessage(t: any, m: string) {
        this._rpbeanSource.next({ t1: "rp-showsidebar"});
    }

    confirmMessage(cb:any){
        this._rpbeanSource.next({ t1: "rp-confirm", t2: "Confirmation", t3: 'Are you sure to delete?', t4: cb });
    }

    confirmChangeMessage(cb:any){
        this._rpbeanSource.next({ t1: "rp-confirm", t2: "Confirmation", t3: 'Are you sure to Change?', t4: cb });
    }

    getApiUrl(){
        return this._apiurl;
    }

    getB64ApiUrl(){
        return this._apiurl+'/images/b64/';
    }

    getImageApiUrl(){
        return this._apiurl+'/images/photo/';
    }
}
