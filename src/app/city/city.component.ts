import { Component, OnInit, Input } from '@angular/core';
import { City } from '../city';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  @Input() myCity: City;

  constructor() { }

  ngOnInit() {
  }

}
