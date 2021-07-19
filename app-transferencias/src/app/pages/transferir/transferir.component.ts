
import { DestinatarioService } from 'src/app/services/destinatario.service';
import { TransferenciaService } from 'src/app/services/transferencia.service';

import { NotifierService } from 'angular-notifier';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.css']
})
export class TransferirComponent implements OnInit {
  private readonly notifier: NotifierService;
  idUser: any;
  destinatarios: any;
  destinatario_buscado: any;
  

  form = new FormGroup({
    destinatario: new FormControl('', [Validators.required]),
    monto: new FormControl('', [Validators.required, Validators.min(1), Validators.max(10000000)]),
  });

  constructor(private destinatarioService: DestinatarioService, private transferenciaService: TransferenciaService, notifierService: NotifierService) {
    this.notifier = notifierService;
    this.idUser = JSON.stringify(localStorage.getItem('iduser')).replace('"', '').replace('"', '');
    this.destinatarioService.obtenerDestinatarios(this.idUser).subscribe((response: any) => {
      this.destinatarios = response;
    });
  }

  ngOnInit(): void {
  }

  detalleDestinatario(event: any) {
    this.notifier.notify('success', 'You are awesome! I mean it!');
    this.destinatario_buscado = this.destinatarios.filter((x: { id: any; }) => x.id === event)[0];
  }

  transferir(event: any) {
    event.preventDefault();
    if (!this.form.valid) {
      alert('El formulario no es valido');
      return;
    }
    const formValues = this.form.value;


    this.transferenciaService.transferir(this.idUser, formValues.destinatario, formValues.monto).subscribe((response: any) => {
      if (response.ok) {
        alert('ingreso correcto');
        this.form.reset();
        this.destinatario_buscado={};
      } else {
        alert('Error en el ingreso');
      }
    });

  }

}
