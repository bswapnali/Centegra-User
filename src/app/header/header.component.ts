import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login-sign/login/login.component';
import { SignupComponent } from '../login-sign/signup/signup.component';
import { LogsignbtnComponent } from '../login-sign/logsignbtn/logsignbtn.component';
import { SharedserviceService } from '../service/sharedservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog 
  ,private sharedService: SharedserviceService) { }
  isExpanded = false;


  ngOnInit(): void {
  }

  onLogin(): void {
    const dialogRef = this.dialog.open(LogsignbtnComponent, {
      // width: '50%',
      // height: '80%',
      data:{isLogin: true}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
   
  }
  onSign(): void {debugger

    const dialogRef = this.dialog.open(LogsignbtnComponent, {
      // width: '1126px',
      // height: '572px',
      data:{IsSignup: true}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  
  collapse() {
    this.isExpanded = false;
  }
}
