import { Component } from '@angular/core';
import { SelectLocationComponent } from './select-location/select-location.component';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(public dialog: MatDialog) {}
    
SelectLocation(): void {
    const dialogRef = this.dialog.open(SelectLocationComponent, {
      width: '500 px',
      height: '350px',
      position: { left:'900px', top: '250px'} 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

