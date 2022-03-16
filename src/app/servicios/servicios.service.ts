import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { InicioComponent } from '../la victima/inicio.component';

@Injectable({
  providedIn: 'root',
})
export class ServiciosService {

  banderita = false;


  persona: {
    user: string;
    pass: string;
  } = {
    user: '',
    pass: '',
  };



  constructor(private ruta: Router, private http: HttpClient) {}

  logueo() {
    this.http
      .get(
        'http://localhost:3000/logueo/login?user=' +
          this.persona.user +
          '&pass=' +
          this.persona.pass
      )
      .subscribe((dato: any) => {
        console.log(dato);

        if (dato) {

          localStorage.setItem('user', 'conectado')
           this.ruta.navigate(['lavictima']);
            alert('Te logueaste conrrectamente');
        } else {

          alert('Datos incorrectos');
        }
      });
  }

  estaLogueada() {

    if(localStorage.getItem('user')) {

      localStorage.getItem('user')

      return true

    } else {

      return false

    }

  }

  cerrarSesion () {

    if (localStorage.getItem('user') && this.estaLogueada() === true) {
      localStorage.removeItem('user')
      this.ruta.navigate(['lavictima']);
          this.banderita = false
    }

  }

  cambiarBandera() {

    if (this.banderita === false) {
       this.banderita = true

    } else {
        this.banderita = false
    }
  }


}




