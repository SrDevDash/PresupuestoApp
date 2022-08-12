import { Component, OnInit } from '@angular/core';
import { AddEgresoService } from '../egreso/add-egreso.service';
import { AddIngresoService } from '../ingreso/add-ingreso.service';
import { Egreso } from '../egreso/egresos.module';
import { Ingreso } from '../ingreso/ingresos.module';
import { UpdatePresupuestoService } from '../update-presupuesto.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  descripcion = '';
  valor = 0;
  tipo= '';
  constructor(private addEgresoService: AddEgresoService, private addIngresoService: AddIngresoService,
    private updatevalores: UpdatePresupuestoService) {}

  ngOnInit(): void {
    
  }
  agregarProducto(){
    if(this.tipo == 'plus')
    {
      let tempIngreso = new Ingreso();
      tempIngreso.description = this.descripcion;
      tempIngreso.valor = this.valor;
      this.addIngresoService.agregarIngreso(tempIngreso);
      this.updatevalores.addIngreso(tempIngreso.valor);
    }if(this.tipo == 'mini')
    {
      let tempEgreso = new Egreso();
      tempEgreso.description = this.descripcion;
      tempEgreso.valor = this.valor;
      this.addEgresoService.agregarEgreso(tempEgreso);
    }
  }
}
