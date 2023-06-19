import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatRadioModule} from '@angular/material/radio';
import { WarehouseCompareCardComponent } from '../warehouse-compare-card/warehouse-compare-card.component';
import { SharedserviceService } from '../service/sharedservice.service';
import { MatDialog } from '@angular/material/dialog';

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
  constructor(public dialog: MatDialog 
    ,private sharedService: SharedserviceService) { }
    isExpanded = false;
  onCompare(): void {

    const dialogRef = this.dialog.open(WarehouseCompareCardComponent, {
      width: '500px',
      height: '572px',
      // data:{IsSignup: true}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
