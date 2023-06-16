import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountCreatedDialogComponent } from './account-created-dialog/account-created-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SharedserviceService } from '../service/sharedservice.service';
import { SignupService } from '../service/signup.service';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  toggle = true;
  private fb = inject(FormBuilder);
  firstName: any;
  email: any;
  lastname: any;
  compname: any;
  desig: any;
  pswd: any;
  cpswd: any;
  mobno: any;
  constructor(
    private route: Router,
    public dialog: MatDialog,
    public sharedservice: SharedserviceService,
    private signupService: SignupService
  ) {}
  signupForm = this.fb.group({
    // company: null,
    firstName: [null, Validators.required],
    email: [null, [Validators.required, this.sharedservice.emailValidator()]],
    lastname: [null, Validators.required],
    compname: [null, Validators.required],
    desig: [null, Validators.required],
    pswd: [null, Validators.required],
    cpswd: [null, Validators.required],
    mobno: [null, Validators.required],
  });

  hasUnitNumber = false;

  // states = [
  //   {name: 'Alabama', abbreviation: 'AL'},
  //   {name: 'Alaska', abbreviation: 'AK'},
  //   {name: 'American Samoa', abbreviation: 'AS'},
  //   {name: 'Arizona', abbreviation: 'AZ'},
  //   {name: 'Arkansas', abbreviation: 'AR'},
  //   {name: 'California', abbreviation: 'CA'},
  //   {name: 'Colorado', abbreviation: 'CO'},
  //   {name: 'Connecticut', abbreviation: 'CT'},
  //   {name: 'Delaware', abbreviation: 'DE'},
  //   {name: 'District Of Columbia', abbreviation: 'DC'},
  //   {name: 'Federated States Of Micronesia', abbreviation: 'FM'},
  //   {name: 'Florida', abbreviation: 'FL'},
  // ];
  onLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '50%',
      height: '80%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  signup() {
    this.route.navigate(['/login']);
  }
  onSubmit(): void {
    this.signupService
      .signup(
        this.firstName,
        this.email,
        this.lastname,
        this.compname,
        this.desig,
        this.pswd,
        this.cpswd,
        this.mobno
      )

      .subscribe(
        (response) => {
          // Handle successful login
          console.log('signed' + this.email);
        },
        (error) => {
          // Handle login error
          console.log('error');
          console.log('signed' + this.email);
        }
      );
    console.log('Thanks!');
  }

  // const dialogRef = this.dialog.open(AccountCreatedDialogComponent, {
  //   width: '1100px',
  //   height: '500px',
  // });

  // dialogRef.afterClosed().subscribe(res => {
  //   console.log('The dialog was closed');
  // });
}
