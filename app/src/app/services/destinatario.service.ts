import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DestinatarioResponse } from '../interfaces/destinatario-response.interface';

@Injectable({
    providedIn: 'root'
})
export class DestinatarioService {

    constructor(private httpClient: HttpClient) { }

    guardarDestinatario(rut: String, id_usuario: number, nombres: String, correo: String, telefono: String, num_cuenta: String, banco: String, tipo_cuenta: number): Observable<DestinatarioResponse> {
        return this.httpClient.post<DestinatarioResponse>('api/destinatarios', {
            rut,
            id_usuario,
            nombres,
            correo,
            telefono,
            num_cuenta,
            banco,
            tipo_cuenta
        });
    }
    obtenerDestinatarios(idUser: string): Observable<DestinatarioResponse> {
        return this.httpClient.get<DestinatarioResponse>('api/destinatarios/' + idUser);
    }


}
