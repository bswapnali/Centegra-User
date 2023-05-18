import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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
  constructor(private route:Router){}
  loginForm = this.fb.group({
    // company: null,
    email: [null,Validators.required],
    pswd: [null, Validators.required]
  });

  hasUnitNumber = false;


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
  
  Submit(): void {
    console.log('Thanks!');
  }
}

  
