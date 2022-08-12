import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { EgresoComponent } from './egreso/egreso.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { FormsModule } from '@angular/forms';
import { AddEgresoService } from './egreso/add-egreso.service';
import { AddIngresoService } from './ingreso/add-ingreso.service';
import { UpdatePresupuestoService } from './update-presupuesto.service';
import { HeaderComponent } from './header/header.component';

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
    FormsModule
  ],
  providers: [AddEgresoService,AddIngresoService,UpdatePresupuestoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
