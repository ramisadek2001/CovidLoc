import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts1',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
})
export class AlertsComponent implements OnInit {

  constructor() { }

  @Input() alerttitle:string

  ngOnInit() {}

}
