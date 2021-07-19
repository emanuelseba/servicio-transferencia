
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './componentes/menu/menu.component';
import { NuevodestinatarioComponent } from './pages/nuevodestinatario/nuevodestinatario.component';
import { NavComponent } from './componentes/nav/nav.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { TransferirComponent } from './pages/transferir/transferir.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    NuevodestinatarioComponent,
    NavComponent,
    FooterComponent,
    TransferirComponent,
    HistorialComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
