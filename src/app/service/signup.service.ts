import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  apiUrl: string = environment.apiUrl;
  private signupUrl = this.apiUrl+'signup'; // Replace with your actual login API endpoint

  constructor(private http: HttpClient) { }

  signup(
    firstName: string, 
    email: string, 
    lastname: string, 
    compname: string, 
    desig: string, 
    pswd: string, 
    cpswd: string, 
    mobno: string, 
    ) {
    return this.http.post(this.signupUrl, {firstName, email,lastname,compname,desig,pswd,cpswd,mobno}); 
     
  }
}
