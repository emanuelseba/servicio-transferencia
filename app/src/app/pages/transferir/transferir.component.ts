
import { DestinatarioService } from 'src/app/services/destinatario.service';
import { TransferenciaService } from 'src/app/services/transferencia.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.css']
})
export class TransferirComponent implements OnInit {
  idUser: any;
  destinatarios: any;
  destinatario_buscado: any;
  

  form = new FormGroup({
    destinatario: new FormControl('', [Validators.required]),
    monto: new FormControl('', [Validators.required, Validators.min(1), Validators.max(10000000)]),
  });

  constructor(private destinatarioService: DestinatarioService, private transferenciaService: TransferenciaService,private toastr: ToastrService) {
    this.idUser = JSON.stringify(localStorage.getItem('iduser')).replace('"', '').replace('"', '');
    this.destinatarioService.obtenerDestinatarios(this.idUser).subscribe((response: any) => {
      this.destinatarios = response;
    });
  }

  ngOnInit(): void {
  }

  detalleDestinatario(event: any) {
    this.destinatario_buscado = this.destinatarios.filter((x: { id: any; }) => x.id === event)[0];
  }

  transferir(event: any) {
    event.preventDefault();
    if (!this.form.valid) {
      this.toastr.warning('El formulario no es valido','Información');
      return;
    }
    const formValues = this.form.value;


    this.transferenciaService.transferir(this.idUser, formValues.destinatario, formValues.monto).subscribe((response: any) => {
      if (response.ok) {
        this.toastr.success('Ingreso Correcto','Correcto');
        this.form.reset();
        this.destinatario_buscado=null;
      } else {
        this.toastr.error('Error en el ingreso','Error');
      }
    });

  }

}
