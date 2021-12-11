import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from "@angular/core";
import { Router } from '@angular/router';

declare var google:any;
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

   map: any;
  @ViewChild('map',{read: ElementRef, static: false}) mapRef: ElementRef;

  infowindows: any = [];
  markers: any = {

    title:"National Art Gallery",
    latitude:"-17.825471",
    longitude:"31.055378"


  }

   constructor(private router:Router) { }

  addMarkersToMap(markers){
    for(let marker of markers){
      let position = new google.map.LatLng(marker.latitude,marker.logitude);

      let mapMarker = new google.apps.Marker({
        position: position,
        title:marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude
      });

      mapMarker.setMap(this.map);
      this.addInfowindowToMarker(mapMarker);
    }
  }

  addInfowindowToMarker(marker){
    let infowindowContent= '<div id=content>'+
                            '<h2 id="FirstHeading" class="firstHeading>'+marker.title+'</h2>'+
                            '<p>Latitude: '+marker.latitude+'</p>'+
                            '<p>longitude: '+marker.longitude+'</p>'+
                            '</div>';
    let infoWindow = new google.maps.infoWindow({
      content: infowindowContent
    });
    marker.addistener('click',()=>{
      this.closeAllInfowindows();
      infoWindow.open(this.map,marker);
    });
    this.infowindows.push(infoWindow); 
  }
  closeAllInfowindows(){
    for(let window of this.infowindows){
      window.close();
    }
  }

   logout(){
    this.router.navigate(['login']);
  }
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
     this.addMarkersToMap(this.markers);
   }
  ngOnInit() {
  }

}
