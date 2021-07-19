import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransferenciaResponse } from '../interfaces/transferencia-response.interface';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  constructor(private httpClient: HttpClient) { }

  historial(idUser: string): Observable<TransferenciaResponse> {
    return this.httpClient.get<TransferenciaResponse>('api/transferencias/'+idUser);
  }

  transferir(id_usuario: number, id_destinatario:number, monto:number): Observable<TransferenciaResponse> {
    return this.httpClient.post<TransferenciaResponse>('api/transferencias', {
        id_usuario,
        id_destinatario,
        monto
    });
}


}
