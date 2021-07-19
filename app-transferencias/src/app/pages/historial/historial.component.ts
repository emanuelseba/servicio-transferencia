
import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  idUser:any;
  transferencias:any;

  constructor(private transferenciaService : TransferenciaService) { }

  ngOnInit(): void {
    this.idUser =  JSON.stringify(localStorage.getItem('iduser')).replace('"','').replace('"','');

    this.transferenciaService.historial(this.idUser).subscribe((response) => {
      this.transferencias=  response;
    });
  }

}
