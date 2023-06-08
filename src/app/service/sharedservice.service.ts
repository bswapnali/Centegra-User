import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  constructor() {

   }

   OnlyNumber(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }


  public decimalOnly(event: { target: { value: string; }; which: any; keyCode: any; }) {
    let txt = event.target.value.trim();
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode == 46) {
      if (txt.includes('.') == false) { return true; }
      else { return false; }
    }
    else {
      if (charCode > 31 &&
        (charCode < 48 || charCode > 57))
        return false;
    }
    return true;
  }


   emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      const isValid = emailRegExp.test(control.value);
      return isValid ? null : { invalidEmail: true };
    };
  }



  signupButtonVisible = true;
  loginButtonVisible = true;

  toggleButtons() {
    this.signupButtonVisible = !this.signupButtonVisible;
    this.loginButtonVisible = !this.loginButtonVisible;
  }



}
