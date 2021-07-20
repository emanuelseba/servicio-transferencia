
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private loginService: LoginService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    localStorage.removeItem('iduser');
    localStorage.removeItem('nombres');
  }

  login(event:any) {
    event.preventDefault();
    if(!this.form.valid) {
      this.toastr.warning('El formulario no es valido','Información');
      return;
    }

    const formValues = this.form.value;
    
    this.loginService.login(formValues.correo, formValues.password).subscribe((response:any) => {
      if(response.ok){
        localStorage.setItem('iduser', response.results[0].iduser);
        localStorage.setItem('nombres', response.results[0].nombres);
        this.loginService.isLogin = true;
        this.router.navigateByUrl('/home');
      }else{
        this.toastr.error('Error en las credenciales','Error');
      }
    });

  }

}