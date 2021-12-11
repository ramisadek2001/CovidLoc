import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Qr{
  qrcode: string;
}
@Injectable({
  providedIn: 'root'
})

export class QrcodeService {
private base_url = "http://localhost/app_apis/"
  constructor(private http: HttpClient) { }

  getQr(){
    return this.http.get<[Qr]>(this.base_url+"get_qrcode.php");
  }
}
