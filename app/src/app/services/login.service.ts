import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../interfaces/login-response.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogin = false;

  constructor(private httpClient: HttpClient) { }

  login(correo: string, password: string): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>('api/login', {
      correo,
      password
    });
  }


}