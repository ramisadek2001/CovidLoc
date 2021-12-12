import { HttpClient } from '@angular/common/http';
import { isNull } from '@angular/compiler/src/output/output_ast';
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
  data: string;

  setData(data) {
    this.data = data;
   }

   getData(){
   
   return this.data;
   }
  getUser(user: User){
    return this.http.post(this.base_url+"get_user.php",user);
  }
}
