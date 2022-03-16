import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from '../servicios/servicios.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  noticia: {
    titulo: string;
    descripcion: string;
    texto: string;
  }[] = [];

  publicacion: {
    titulo: string;
    descripcion: string;
    texto: string;
  } = {
    titulo: '',
    descripcion: '',
    texto: '',
  };

  constructor(
    public s: ServiciosService,
    private ruta: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.mostrarNoticia();

  }

  publicarNoti() {

    this.noticia.unshift(this.publicacion)

    this.GuradarBaseDatosNoticia()

  }

  GuradarBaseDatosNoticia() {


    for (let index = 0; index < this.noticia.length; index++) {
      this.noticia[index].titulo = this.publicacion.titulo;
      this.noticia[index].descripcion = this.publicacion.descripcion;
      this.noticia[index].texto = this.publicacion.texto;



      this.http
        .post('http://localhost:3000/p/publicaciones', {
          titulo: this.noticia[index].titulo,
          descripcion: this.noticia[index].descripcion,
          texto: this.noticia[index].texto,
        })
        .subscribe((dato: any) => { console.log(dato);
        })

      break;
    }

  }

  mostrarNoticia() {
    this.http.get('http://localhost:3000/p/publicaciones2').subscribe((dato:any) => { //console.log(dato);
    this.noticia = dato

    this.noticia.reverse()

  })

    }
  }

