import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";



export interface User{
  email: string;
  psw:string;
  qrcode:string;
}
@Injectable({
  providedIn: 'root'
})

export class UserServiceService {
private base_url = "http://localhost/app_apis/";

  constructor(private http: HttpClient) { }

    postUser(user: User){
    return this.http.post(this.base_url+"add_user.php",user);
  }
}
