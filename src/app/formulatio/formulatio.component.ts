import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from '../servicios/servicios.service';

@Component({
  selector: 'app-formulatio',
  templateUrl: './formulatio.component.html',
  styleUrls: ['./formulatio.component.css']
})
export class FormulatioComponent implements OnInit {

  formulario : {
    titulo: string,
    descripcion: string;
    texto : string;
  } = {
    titulo : "",
    descripcion: "",
    texto : ""
  }

  constructor(  public s: ServiciosService,
    private ruta: Router,
    private http: HttpClient) { }

  ngOnInit(): void {


  }

  irInicio() {
    this.ruta.navigate(["lavictima"])
  }

  publicacion() {
    this.http.post("http://localhost:3000/p/publicaciones", {
      titulo: this.formulario.titulo,
      descripcion: this.formulario.descripcion,
      texto: this.formulario.texto}).subscribe((dato:any) => {
        console.log(dato);

      })
  }

}
