import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User{
  email: string;
  id?:string;
  psw:string;
  qrcode:string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {
private base_url = "http://localhost/app_apis/";

  constructor(private http: HttpClient) { }
  postUser(user: User){
    return this.http.post(this.base_url+"login.php",user);
  }
  getUser(user: User){
    return this.http.post(this.base_url+"get_user.php",user);
  }
}
