import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-account-created-dialog',
  templateUrl: './account-created-dialog.component.html',
  styleUrls: ['./account-created-dialog.component.scss']
})
export class AccountCreatedDialogComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<AccountCreatedDialogComponent>) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
}
