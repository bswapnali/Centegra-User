import { Component } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-warehouse-compare-card',
  templateUrl: './warehouse-compare-card.component.html',
  styleUrls: ['./warehouse-compare-card.component.scss'],
})
export class WarehouseCompareCardComponent {
  IsCompare: true;

  constructor(
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<WarehouseCompareCardComponent>,
    @Inject(MAT_DIALOG_DATA)
    public currentdata: { IsCompare: Boolean }
  ) {}
}
