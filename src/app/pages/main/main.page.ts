import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from "@angular/core";

declare var google:any;
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

   map: any;
  @ViewChild('map',{read: ElementRef, static: false}) mapRef: ElementRef;
   constructor() { }
   ionViewDidEnter(){
     this.showMap();
   }
   showMap(){
     const location = new google.maps.LatLng(-17.824858,31.053028);
     const options = {
      center: location,
      zoom:15,
       disableDefaultUI: true
     }
     this.map = new google.maps.Map(this.mapRef.nativeElement, options);
   }
  ngOnInit() {
  }

}
