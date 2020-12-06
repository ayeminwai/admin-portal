import { Injectable } from '@angular/core';
import { Intercom } from './intercom';
import { BackendApiService } from '../core';
import { SetupApi } from './util.enum';

@Injectable()
export class Reference {
    constructor(private ic: Intercom, private http: BackendApiService) { }

    _setup: any = {
        "user": {}
    };

    _dlist: any = {
        "division_list": [],
        "township_list": [],
        "gender_list": [],
        "treatment_list": [],
        "question_list": [],
        "employment_list": [],
        "type_of_drug_list":[]
    }

    getRegistrationSetup(cb:any){
        let _obj:Object = { "refNo": "2211202002121426", "tranxType": "REG" }
        this.http.apiCall(SetupApi.REG_SETUP, _obj).subscribe(d=> {
            this._dlist.division_list = d.response.divisions; 
            this._dlist.gender_list = d.response.genders;
            this._dlist.township_list = d.response.townships;
            this._dlist.employment_list = d.response.employments;
            this._dlist.question_list = d.response.questions;
            if(cb) cb.call();
        });
    }

    getLoginSetup(cb:any){
        let _obj:Object = { "refNo": "2211202002121426", "tranxType": "LOGIN" }
        this.http.apiCall(SetupApi.LOGIN_SETUP, _obj).subscribe(d=> {
            this._dlist.question_list = d.response.questions; 
            if(cb) cb.call();
        });
    }

    getBasicInfoSetup(cb:any){
        let _obj:Object = { "refNo": "2211202002121426", "tranxType": "BIS" }
        this.http.apiCall(SetupApi.BASIC_SETUP, _obj).subscribe(d=> {
            this._dlist.type_of_drug_list = d.response.typeOfDrugs; 
            this._dlist.treatment_list = d.response.treatments;
            if(cb) cb.call();
        });
    }


}
