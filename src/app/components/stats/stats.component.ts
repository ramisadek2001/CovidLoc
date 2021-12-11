import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {

  constructor() { }
  @Input() statstitle:any
  @Input() statsnumber:any

  ngOnInit() {}

}
