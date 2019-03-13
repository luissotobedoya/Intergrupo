import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private servicioUrl: string = 'https://restcountries.eu/rest/v2/all';

  constructor(private httpClient: HttpClient) { }

  public obtenerPaises(): Observable<any> {
    let respuesta = from(this.httpClient.get(this.servicioUrl));
    return respuesta;
  }
}
