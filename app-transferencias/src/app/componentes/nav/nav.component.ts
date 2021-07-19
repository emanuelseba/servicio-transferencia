import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  nombres:String = "";

  constructor() {
   }

  ngOnInit(): void {
    this.nombres =  JSON.stringify(localStorage.getItem('nombres')).replace('"','').replace('"','');
  }

}
