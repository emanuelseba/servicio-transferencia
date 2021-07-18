import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    correo: new FormControl('', [ Validators.required ]),
    password: new FormControl('', [ Validators.required ])
  });

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login(event:any) {
    event.preventDefault();
    if(!this.form.valid) {
      alert('El formulario no es valido');
      return;
    }

    const formValues = this.form.value;
    
    this.loginService.login(formValues.correo, formValues.password).subscribe((response:any) => {
      if(response.ok){
        localStorage.setItem('user', response.results);
        this.loginService.isLogin = true;
        this.router.navigateByUrl('/destinatario');
      }else{
        alert('Error en el ingreso');
      }
    });

  }

}