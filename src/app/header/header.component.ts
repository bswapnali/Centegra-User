import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog){}
  isExpanded = false;


  ngOnInit(): void {
  }

  onLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '595px',
      height: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  onSign(): void {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '1300px',
      height: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  
  collapse() {
    this.isExpanded = false;
  }
}
