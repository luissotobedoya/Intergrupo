import { Component, OnInit, TemplateRef } from '@angular/core';
import { PaisService } from './servicios/pais.service';
import { Pais } from './dominio/pais';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  paises: Pais[]=[];
  title = 'Prueba Intergrupo';
  closeResult: string;
  imagenPais: string;
  capital: string;

  constructor(private servicioPaises: PaisService, private modalService: NgbModal){

  }

  ngOnInit(): void {
    this.servicioPaises.obtenerPaises().subscribe(respuesta => {
        this.paises = respuesta as Pais[];
        console.log(this.paises);
    })
  }

  mostrarInformacionPais(pais, content){
    this.imagenPais = pais.flag;
    this.capital = pais.capital;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  
}
