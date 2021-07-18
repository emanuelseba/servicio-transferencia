import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevodestinatario',
  templateUrl: './nuevodestinatario.component.html',
  styleUrls: ['./nuevodestinatario.component.css']
})
export class NuevodestinatarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    console.log(localStorage.getItem('user'));
  }

}
