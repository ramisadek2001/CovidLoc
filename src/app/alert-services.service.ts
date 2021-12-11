import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";



export interface Alert{

  id:string;
  alerttitle: string;
  headline: string;
  image: string;
}
@Injectable({
  providedIn: 'root'
})
export class AlertServicesService {

  private base_url = "http://localhost/app_apis/"
  constructor(private http: HttpClient) { }

  getAllAlerts(){
    return this.http.get<[Alert]>(this.base_url+"get_all_alerts.php");
  }
}
