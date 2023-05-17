import { Component } from '@angular/core';

interface option {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent {
    Ratings: option[] = [
      {value: '1star', viewValue: '1 Star'},
      {value: '2star', viewValue: '2 Star'},
      {value: '3star', viewValue: '3 Star'},
      {value: '4star', viewValue: '4 Star'},
      {value: '5star', viewValue: '5 Star'},
    ];
}
