import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl = environment.apiUrl + 'auth/';
  private _login = this._baseUrl + 'login'

  constructor(private http:HttpClient) { }
  login(data: any) {
    return this.http.post<any>(this._login, data)
  }
  public getToken() {
    return localStorage.getItem('token');
  }
}
