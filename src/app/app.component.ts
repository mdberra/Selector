import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstadoOptions, Estado } from './model/estadoOptions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Selector';

  estadoOptions: EstadoOptions;
  optionsDeleg: any = [];   // idEstado, descripcion

  delegacionForm: FormGroup;


  //  estadoDescripOption: EstadoDescripOption;

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.delegacionForm = this.formBuilder.group({
      deleg: ['']
    }, {
      //   validator:
    });

    this.estadoOptions = new EstadoOptions();
    this.estadoOptions.setEstados(Number(1), "Caso 1");
    this.estadoOptions.setEstados(Number(2), "Caso 2");
    this.estadoOptions.setEstados(Number(3), "Caso 3");
    this.optionsDeleg =  this.estadoOptions.getEstados();
    console.log(this.optionsDeleg);
    console.log(this.estadoOptions.getEstadoId(2)[0].descripcion);
    this.delegacionForm.controls['deleg'].setValue(this.estadoOptions.getEstadoId(2)[0].idEstado);
  }

  onSubmit() {
    console.log(this.delegacionForm.controls['deleg'].value);
  }
}
