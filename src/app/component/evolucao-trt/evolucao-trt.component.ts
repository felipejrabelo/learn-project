import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-evolucao-trt',
  templateUrl: './evolucao-trt.component.html',
  styleUrls: ['./evolucao-trt.component.css']
})
export class EvolucaoTrtComponent implements OnInit {

  formEvolucaoTrt = new FormGroup({
    dataAtendimentoUm: new FormControl(null, Validators.required),
    codProcedimentoUm: new FormControl(null, Validators.required),
    horaInicialUm: new FormControl(null, Validators.required),
    horaFinalUm: new FormControl(null, Validators.required),
    condutaUm: new FormControl(null, Validators.required),
    dataAtendimentoDois: new FormControl(null, Validators.required),
    codProcedimentoDois: new FormControl(null, Validators.required),
    horaInicialDois: new FormControl(null, Validators.required),
    horaFinalDois: new FormControl(null, Validators.required),
    condutaDois: new FormControl(null, Validators.required),
    dataAtendimentoTres: new FormControl(null, Validators.required),
    codProcedimentoTres: new FormControl(null, Validators.required),
    horaInicialTres: new FormControl(null, Validators.required),
    horaFinalTres: new FormControl(null, Validators.required),
    condutaTres: new FormControl(null, Validators.required),
    dataAtendimentoQuatro: new FormControl(null, Validators.required),
    codProcedimentoQuatro: new FormControl(null, Validators.required),
    horaInicialQuatro: new FormControl(null, Validators.required),
    horaFinalQuatro: new FormControl(null, Validators.required),
    condutaQuatro: new FormControl(null, Validators.required),
    dataAtendimentoCinco: new FormControl(null, Validators.required),
    codProcedimentoCinco: new FormControl(null, Validators.required),
    horaInicialCinco: new FormControl(null, Validators.required),
    horaFinalCinco: new FormControl(null, Validators.required),
    condutaCinco: new FormControl(null, Validators.required),
    dataAtendimentoSeis: new FormControl(null, Validators.required),
    codProcedimentoSeis: new FormControl(null, Validators.required),
    horaInicialSeis: new FormControl(null, Validators.required),
    horaFinalSeis: new FormControl(null, Validators.required),
    condutaSeis: new FormControl(null, Validators.required),
    dataAtendimentoSete: new FormControl(null, Validators.required),
    codProcedimentoSete: new FormControl(null, Validators.required),
    horaInicialSete: new FormControl(null, Validators.required),
    horaFinalSete: new FormControl(null, Validators.required),
    condutaSete: new FormControl(null, Validators.required),
    dataAtendimentoOito: new FormControl(null, Validators.required),
    codProcedimentoOito: new FormControl(null, Validators.required),
    horaInicialOito: new FormControl(null, Validators.required),
    horaFinalOito: new FormControl(null, Validators.required),
    condutaOito: new FormControl(null, Validators.required),
    dataAtendimentoNove: new FormControl(null, Validators.required),
    codProcedimentoNove: new FormControl(null, Validators.required),
    horaInicialNove: new FormControl(null, Validators.required),
    horaFinalNove: new FormControl(null, Validators.required),
    condutaNove: new FormControl(null, Validators.required),
    dataAtendimentoDez: new FormControl(null, Validators.required),
    codProcedimentoDez: new FormControl(null, Validators.required),
    horaInicialDez: new FormControl(null, Validators.required),
    horaFinalDez: new FormControl(null, Validators.required),
    condutaDez: new FormControl(null, Validators.required)

  })

  constructor() { }

  ngOnInit(): void {
  }

  checkCampos(){
    if(this.formEvolucaoTrt.get('dataAtendimentoUm').value == ""){
      this.formEvolucaoTrt.get('dataAtendimentoUm').setValue(null);
    }
    if(this.formEvolucaoTrt.get('codProcedimentoUm').value == ""){
      this.formEvolucaoTrt.get('codProcedimentoUm').setValue(null);
    }
    if(this.formEvolucaoTrt.get('horaInicialUm').value == ""){
      this.formEvolucaoTrt.get('horaInicialUm').setValue(null);
    }
    if(this.formEvolucaoTrt.get('horaFinalUm').value == ""){
      this.formEvolucaoTrt.get('horaFinalUm').setValue(null);
    }
    if(this.formEvolucaoTrt.get('condutaUm').value == ""){
      this.formEvolucaoTrt.get('condutaUm').setValue(null);
    }
    if(this.formEvolucaoTrt.get('dataAtendimentoDois').value == ""){
      this.formEvolucaoTrt.get('dataAtendimentoDois').setValue(null);
    }
    if(this.formEvolucaoTrt.get('codProcedimentoDois').value == ""){
      this.formEvolucaoTrt.get('codProcedimentoDois').setValue(null);
    }
    if(this.formEvolucaoTrt.get('horaInicialDois').value == ""){
      this.formEvolucaoTrt.get('horaInicialDois').setValue(null);
    }
    if(this.formEvolucaoTrt.get('horaFinalDois').value == ""){
      this.formEvolucaoTrt.get('horaFinalDois').setValue(null);
    }
    if(this.formEvolucaoTrt.get('condutaDois').value == ""){
      this.formEvolucaoTrt.get('condutaDois').setValue(null);
    }
    if(this.formEvolucaoTrt.get('dataAtendimentoTres').value == ""){
      this.formEvolucaoTrt.get('dataAtendimentoTres').setValue(null);
    }
    if(this.formEvolucaoTrt.get('codProcedimentoTres').value == ""){
      this.formEvolucaoTrt.get('codProcedimentoTres').setValue(null);
    }
    if(this.formEvolucaoTrt.get('horaInicialTres').value == ""){
      this.formEvolucaoTrt.get('horaInicialTres').setValue(null);
    }
    if(this.formEvolucaoTrt.get('horaFinalTres').value == ""){
      this.formEvolucaoTrt.get('horaFinalTres').setValue(null);
    }
    if(this.formEvolucaoTrt.get('condutaTres').value == ""){
      this.formEvolucaoTrt.get('condutaTres').setValue(null);
    }
    if(this.formEvolucaoTrt.get('dataAtendimentoQuatro').value == ""){
      this.formEvolucaoTrt.get('dataAtendimentoQuatro').setValue(null);
    }
    if(this.formEvolucaoTrt.get('codProcedimentoQuatro').value == ""){
      this.formEvolucaoTrt.get('codProcedimentoQuatro').setValue(null);
    }
    if(this.formEvolucaoTrt.get('horaInicialQuatro').value == ""){
      this.formEvolucaoTrt.get('horaInicialQuatro').setValue(null);
    }
    if(this.formEvolucaoTrt.get('horaFinalQuatro').value == ""){
      this.formEvolucaoTrt.get('horaFinalQuatro').setValue(null);
    }
    if(this.formEvolucaoTrt.get('condutaQuatro').value == ""){
      this.formEvolucaoTrt.get('condutaQuatro').setValue(null);
    }
    if(this.formEvolucaoTrt.get('dataAtendimentoCinco').value == ""){
      this.formEvolucaoTrt.get('dataAtendimentoCinco').setValue(null);
    }
    if(this.formEvolucaoTrt.get('codProcedimentoCinco').value == ""){
      this.formEvolucaoTrt.get('codProcedimentoCinco').setValue(null);
    }
    if(this.formEvolucaoTrt.get('horaInicialCinco').value == ""){
      this.formEvolucaoTrt.get('horaInicialCinco').setValue(null);
    }
    if(this.formEvolucaoTrt.get('horaFinalCinco').value == ""){
      this.formEvolucaoTrt.get('horaFinalCinco').setValue(null);
    }
    if(this.formEvolucaoTrt.get('condutaCinco').value == ""){
      this.formEvolucaoTrt.get('condutaCinco').setValue(null);
    }
    if(this.formEvolucaoTrt.get('dataAtendimentoSeis').value == ""){
      this.formEvolucaoTrt.get('dataAtendimentoSeis').setValue(null);
    }
    if(this.formEvolucaoTrt.get('codProcedimentoSeis').value == ""){
      this.formEvolucaoTrt.get('codProcedimentoSeis').setValue(null);
    }
    if(this.formEvolucaoTrt.get('horaInicialSeis').value == ""){
      this.formEvolucaoTrt.get('horaInicialSeis').setValue(null);
    }
    if(this.formEvolucaoTrt.get('horaFinalSeis').value == ""){
      this.formEvolucaoTrt.get('horaFinalSeis').setValue(null);
    }
    if(this.formEvolucaoTrt.get('condutaSeis').value == ""){
      this.formEvolucaoTrt.get('condutaSeis').setValue(null);
    }
    if(this.formEvolucaoTrt.get('dataAtendimentoSete').value == ""){
      this.formEvolucaoTrt.get('dataAtendimentoSete').setValue(null);
    }
    if(this.formEvolucaoTrt.get('codProcedimentoSete').value == ""){
      this.formEvolucaoTrt.get('codProcedimentoSete').setValue(null);
    }
    if(this.formEvolucaoTrt.get('horaInicialSete').value == ""){
      this.formEvolucaoTrt.get('horaInicialSete').setValue(null);
    }
    if(this.formEvolucaoTrt.get('horaFinalSete').value == ""){
      this.formEvolucaoTrt.get('horaFinalSete').setValue(null);
    }
    if(this.formEvolucaoTrt.get('condutaSete').value == ""){
      this.formEvolucaoTrt.get('condutaSete').setValue(null);
    }
    if(this.formEvolucaoTrt.get('dataAtendimentoOito').value == ""){
      this.formEvolucaoTrt.get('dataAtendimentoOito').setValue(null);
    }
    if(this.formEvolucaoTrt.get('codProcedimentoOito').value == ""){
      this.formEvolucaoTrt.get('codProcedimentoOito').setValue(null);
    }
    if(this.formEvolucaoTrt.get('horaInicialOito').value == ""){
      this.formEvolucaoTrt.get('horaInicialOito').setValue(null);
    }
    if(this.formEvolucaoTrt.get('horaFinalOito').value == ""){
      this.formEvolucaoTrt.get('horaFinalOito').setValue(null);
    }
    if(this.formEvolucaoTrt.get('condutaOito').value == ""){
      this.formEvolucaoTrt.get('condutaOito').setValue(null);
    }
    if(this.formEvolucaoTrt.get('dataAtendimentoNove').value == ""){
      this.formEvolucaoTrt.get('dataAtendimentoNove').setValue(null);
    }
    if(this.formEvolucaoTrt.get('codProcedimentoNove').value == ""){
      this.formEvolucaoTrt.get('codProcedimentoNove').setValue(null);
    }
    if(this.formEvolucaoTrt.get('horaInicialNove').value == ""){
      this.formEvolucaoTrt.get('horaInicialNove').setValue(null);
    }
    if(this.formEvolucaoTrt.get('horaFinalNove').value == ""){
      this.formEvolucaoTrt.get('horaFinalNove').setValue(null);
    }
    if(this.formEvolucaoTrt.get('condutaNove').value == ""){
      this.formEvolucaoTrt.get('condutaNove').setValue(null);
    }
    if(this.formEvolucaoTrt.get('dataAtendimentoDez').value == ""){
      this.formEvolucaoTrt.get('dataAtendimentoDez').setValue(null);
    }
    if(this.formEvolucaoTrt.get('codProcedimentoDez').value == ""){
      this.formEvolucaoTrt.get('codProcedimentoDez').setValue(null);
    }
    if(this.formEvolucaoTrt.get('horaInicialDez').value == ""){
      this.formEvolucaoTrt.get('horaInicialDez').setValue(null);
    }
    if(this.formEvolucaoTrt.get('horaFinalDez').value == ""){
      this.formEvolucaoTrt.get('horaFinalDez').setValue(null);
    }
    if(this.formEvolucaoTrt.get('condutaDez').value == ""){
      this.formEvolucaoTrt.get('condutaDez').setValue(null);
    }
  }
}
