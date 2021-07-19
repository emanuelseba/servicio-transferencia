
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BancoService } from 'src/app/services/banco.service';
import { DestinatarioService } from 'src/app/services/destinatario.service';
import { TipoCuentaService } from 'src/app/services/tipocuenta.service';

import { formatRut, RutFormat, validateRut} from '@fdograph/rut-utilities';

@Component({
  selector: 'app-nuevodestinatario',
  templateUrl: './nuevodestinatario.component.html',
  styleUrls: ['./nuevodestinatario.component.css']
})
export class NuevodestinatarioComponent implements OnInit {

  idUser: any;
  bancos: any;
  tipocuentas: any;

  form = new FormGroup({
    rut: new FormControl('', [Validators.required]),
    nombres: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    banco: new FormControl('', [Validators.required]),
    tipo_cuenta: new FormControl('', [Validators.required]),
    numero_cuenta: new FormControl('', [Validators.required]),
  });

  constructor(private destinarioService: DestinatarioService, private bancoService: BancoService, private tipoCuentaService: TipoCuentaService) {
    this.idUser = JSON.stringify(localStorage.getItem('iduser')).replace('"', '').replace('"', '');

    this.bancoService.obtenerBancos().subscribe((response:any) => {
      this.bancos=  response.banks;
    });
    this.tipoCuentaService.obtenerTipoCuentas().subscribe((response:any) => {
      this.tipocuentas=  response;
    });
  }

  ngOnInit(): void {
  }

  validarRut(event:any){
    const rut = event.target.value;
    if(validateRut(rut)){
      event.target.value = formatRut(rut, RutFormat.DOTS_DASH);
    }else{
      event.target.value="";
    } 
  }

  guardar(event: any) {
    event.preventDefault();

    if (!this.form.valid) {
      alert('El formulario no es valido');
      return;
    }

    
    const formValues = this.form.value;
    const nameBanco = this.bancos.filter((x: { id: any; }) => x.id === formValues.banco)[0].name;

    
    this.destinarioService.guardarDestinatario(formValues.rut, this.idUser, formValues.nombres, formValues.correo,
      formValues.telefono,formValues.numero_cuenta,nameBanco,formValues.tipo_cuenta).subscribe((response: any) => {
        if(response.ok){
          alert('ingreso correcto');
          this.form.reset();
        }else{
          alert('Error en el ingreso');
        }
      });

  }

}
