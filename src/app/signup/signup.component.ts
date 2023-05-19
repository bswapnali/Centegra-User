import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountCreatedDialogComponent } from './account-created-dialog/account-created-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  toggle = true;
  private fb = inject(FormBuilder);
  constructor(private route:Router, public dialog:MatDialog){}
  loginForm = this.fb.group({
    // company: null,
    firstName: [null, Validators.required],
    email: [null,Validators.required],
    lastname: [null, Validators.required],
    compname: [null, Validators.required],
    desig: [null, Validators.required],
    pswd: [null, Validators.required],
    cpswd: [null, Validators.required],
    mobno: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Alabama', abbreviation: 'AL'},
    {name: 'Alaska', abbreviation: 'AK'},
    {name: 'American Samoa', abbreviation: 'AS'},
    {name: 'Arizona', abbreviation: 'AZ'},
    {name: 'Arkansas', abbreviation: 'AR'},
    {name: 'California', abbreviation: 'CA'},
    {name: 'Colorado', abbreviation: 'CO'},
    {name: 'Connecticut', abbreviation: 'CT'},
    {name: 'Delaware', abbreviation: 'DE'},
    {name: 'District Of Columbia', abbreviation: 'DC'},
    {name: 'Federated States Of Micronesia', abbreviation: 'FM'},
    {name: 'Florida', abbreviation: 'FL'},
  ];

  onSubmit(): void {
    console.log('Thanks!');
  }
  login(){
    this.route.navigate(['/login'])
  }
  onSignUp(): void {
    const dialogRef = this.dialog.open(AccountCreatedDialogComponent, {
      width: '1100px',
      height: '500px',
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log('The dialog was closed');
    });
  }
}

