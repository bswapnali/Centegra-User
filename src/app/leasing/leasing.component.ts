import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-leasing',
  templateUrl: './leasing.component.html',
  styleUrls: ['./leasing.component.scss'],
})
export class LeasingComponent {
  foods: any[] = [
    { value: 'area-0', viewValue: 'Area 1' },
    { value: 'area-1', viewValue: 'Area 2' },
    { value: 'area-2', viewValue: 'Area 3' },
  ];
}
