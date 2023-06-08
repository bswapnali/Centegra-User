import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { LoginService } from '../service/login.service';
import { SharedserviceService } from '../service/sharedservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 
  show: boolean= false;
  toggle = true;
  private fb = inject(FormBuilder);
  email:any;
  password:any;
  constructor(private route:Router, public dialog:MatDialog, private loginService: LoginService,public sharedservice:SharedserviceService){}
  loginForm = this.fb.group({
    // company: null,
    email: [null, [Validators.required, this.sharedservice.emailValidator()]],
    password: [null, Validators.required],




  });
  login(){
    this.route.navigate(['/login'])
  }
  
  clear(){
  // this.email ="";
  // this.password = "";
  this.show = true;
  }

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'Enter valid email';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
  // getErrorMsg(){
  //     if (this.password.hasError('required')) {
  //       return 'Enter a valid password';
  //     }
  
  //     return this.email.hasError('email') ? 'Not a valid password' : '';
  //   }
  
  
  onSubmit(): void {
    this.loginService.login(this.email, this.password)
      .subscribe(
        (response) => {
          // Handle successful login
          console.log('logined'+this.email);
        },
        (error) => {
          // Handle login error
          console.log('error');
          console.log('logined'+this.email);
        }
      );
    console.log('Thanks!');
  }
  

  
}

  
