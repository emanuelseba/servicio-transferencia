
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { NuevodestinatarioComponent } from './pages/nuevodestinatario/nuevodestinatario.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { AuthGuard } from './guards/auth.guard';
import { TransferirComponent } from './pages/transferir/transferir.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: NuevodestinatarioComponent,canActivate:[AuthGuard] },
  { path: 'transferir', component: TransferirComponent,canActivate:[AuthGuard]},
  { path: 'historial', component: HistorialComponent,canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
