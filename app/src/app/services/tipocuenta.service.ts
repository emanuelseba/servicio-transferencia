import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoCuentaResponse } from '../interfaces/tipocuenta-response.interface';

@Injectable({
  providedIn: 'root'
})
export class TipoCuentaService {

  constructor(private httpClient: HttpClient) { }

  obtenerTipoCuentas(): Observable<TipoCuentaResponse> {
    return this.httpClient.get<TipoCuentaResponse>('api/tipocuenta');
  }


}
