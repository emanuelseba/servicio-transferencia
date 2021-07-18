import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { NuevodestinatarioComponent } from './pages/nuevodestinatario/nuevodestinatario.component';
import { TransferirComponent } from './pages/transferir/transferir.component';
import { HistorialComponent } from './pages/historial/historial.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LoginComponent },
  { path: 'destinatario', component: NuevodestinatarioComponent },
  { path: 'transferir', component: TransferirComponent },
  { path: 'historial', component: HistorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
