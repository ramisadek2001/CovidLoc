import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CasesServicesService, Data } from "../../cases-services.service";
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {

  dataa: Data[];
  constructor(private router:Router,private service: CasesServicesService) { }
logout(){
    this.router.navigate(['login']);
  }
  ngOnInit() {
    this.service.getAllData().subscribe( Response =>{
      this.dataa = Response;
      console.log("data:",this.dataa);
    });
  }

}
