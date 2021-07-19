import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BancoResponse } from '../interfaces/banco-response.interface';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  constructor(private httpClient: HttpClient) { }

  obtenerBancos(): Observable<BancoResponse> {
    return this.httpClient.get<BancoResponse>('https://bast.dev/api/banks.php');
  }


}
