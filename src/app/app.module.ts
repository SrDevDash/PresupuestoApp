import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { EgresoComponent } from './egreso/egreso.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { FormsModule } from '@angular/forms';
import { AddEgresoService } from './egreso/add-egreso.service';
import { AddIngresoService } from './ingreso/add-ingreso.service';
import { HeaderComponent } from './header/header.component';
import { DataServices } from './data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    EgresoComponent,
    IngresoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AddEgresoService,AddIngresoService,DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
