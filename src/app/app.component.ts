import { Component, OnInit, TemplateRef } from '@angular/core';
import { PaisService } from './servicios/pais.service';
import { Pais } from './dominio/pais';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  paises: Pais[]=[];
  title = 'Prueba Intergrupo';
  imagenPais: string;
  capital: string;

  constructor(private servicioPaises: PaisService, private modalService: NgbModal, private spinner: NgxSpinnerService){

  }

  ngOnInit(): void {
    this.spinner.show();
    this.servicioPaises.obtenerPaises().subscribe(respuesta => {
        this.paises = respuesta as Pais[];
        this.spinner.hide();
      });
  }

  mostrarInformacionPais(pais, content){
    this.imagenPais = pais.flag;
    this.capital = pais.capital;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
