import { Component, OnInit, TemplateRef } from '@angular/core';
import { PaisService } from './servicios/pais.service';
import { Pais } from './dominio/pais';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  paises: Pais[]=[];
  title = 'Prueba Intergrupo';

  constructor(private servicioPaises: PaisService){

  }

  ngOnInit(): void {
    this.servicioPaises.obtenerPaises().subscribe(respuesta => {
        this.paises = respuesta as Pais[];
    })
  }

  mostrarInformacionPais(pais, template: TemplateRef<any>){
  }
  
}
