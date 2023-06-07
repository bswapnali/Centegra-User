import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-leasing',
  templateUrl: './leasing.component.html',
  styleUrls: ['./leasing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeasingComponent {
  indeterminate = false;
  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
  foods: any[] = [
    { value: 'area-0', viewValue: 'Area 1' },
    { value: 'area-1', viewValue: 'Area 2' },
    { value: 'area-2', viewValue: 'Area 3' },
  ];
}
