import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = environment.apiUrl;
  private loginUrl = this.apiUrl+'login'; // Replace with your actual login API endpoint

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(this.loginUrl, { email, password });
  }
}
