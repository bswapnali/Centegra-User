import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  show: boolean= false;
  toggle = true;

  private fb = inject(FormBuilder);
  
  constructor(private route:Router, public dialog:MatDialog){}
  loginForm = this.fb.group({
    // company: null,
    
  });
  login(){
    this.route.navigate(['/login'])
  }
  
  clear(){
  // this.email ="";
  // this.password = "";
  this.show = true;
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Enter valid email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorMsg(){
      if (this.password.hasError('required')) {
        return 'Enter a valid password';
      }
  
      return this.email.hasError('email') ? 'Not a valid password' : '';
    }
  
  
  Submit(): void {
    console.log('Thanks!');
  }

  
}

  
