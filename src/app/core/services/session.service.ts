import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setToken(data:any){
    sessionStorage.setItem('access_token', data.access_token);
    sessionStorage.setItem('refresh_token', data.refresh_token);
  }

  getToken(){
    return sessionStorage.getItem('access_token');
  }

  getRefreshToken(){
    return sessionStorage.getItem('refresh_token');
  }

  getUser(){
    return sessionStorage.getItem('access_user_name');
  }

  setUser(data:string){
    sessionStorage.setItem('access_user_name',data);
  }

  logout(){
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('refresh_token');
  }

  removeUser(){
    sessionStorage.removeItem('access_user_name');
  }

  setDateTime(data:string){
    sessionStorage.setItem('datetime', data);
  }

  getDateTime(){
    return sessionStorage.getItem('datetime');
  }
}
