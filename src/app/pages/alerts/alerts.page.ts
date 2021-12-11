import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertServicesService, Alert } from "../../alert-services.service";
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage implements OnInit {

  alerts: Alert[];

  constructor(private router:Router,private service: AlertServicesService) { }
logout(){
    this.router.navigate(['login']);
  }
  ngOnInit() {
    this.service.getAllAlerts().subscribe( Response =>{
      this.alerts = Response;
      console.log(this.alerts);
    });
  }

}
