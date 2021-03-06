import { Component, OnInit, Input } from '@angular/core';
import { City } from '../city';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  @Input() public myCities: Array<City>;
  
  constructor() { }
  
  ngOnInit() {

  }

}
