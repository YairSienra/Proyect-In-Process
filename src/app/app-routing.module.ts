import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './la victima/inicio.component';
import { JuegosComponent } from './el asesino/juegos.component';
import { LoginComponent } from './login/login.component';
import { FormulatioComponent } from './formulatio/formulatio.component';

const routes: Routes = [
  {
    path: 'lavictima', component: InicioComponent
  },
  {
    path: 'elasesino', component: JuegosComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'formulatio', component: FormulatioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
