import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PaisService } from './servicios/pais.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgxSpinnerModule
  ],
  providers: [PaisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
