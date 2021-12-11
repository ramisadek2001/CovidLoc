import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";




export interface Data{

  cases:string;
  deaths: string;
  recovered: string;
  active: string;
  critical:string;
}
@Injectable({
  providedIn: 'root'
})
export class CasesServicesService {
private base_url = "http://localhost/app_apis/"
  constructor(private http: HttpClient) { }

  getAllData(){
    return this.http.get<[Data]>(this.base_url+"get_all_data.php");
  }
}
