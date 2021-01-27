import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-evolucao-fisco',
  templateUrl: './evolucao-fisco.component.html',
  styleUrls: ['./evolucao-fisco.component.css']
})
export class EvolucaoFiscoComponent implements OnInit {

  formEvolucaoFisco = new FormGroup({
    dataAtendimentoUm: new FormControl(null, Validators.required),
    codProcedimentoUm: new FormControl(null, Validators.required),
    condutaUm: new FormControl(null, Validators.required),
    dataAtendimentoDois: new FormControl(null, Validators.required),
    codProcedimentoDois: new FormControl(null, Validators.required),
    condutaDois: new FormControl(null, Validators.required),
    dataAtendimentoTres: new FormControl(null, Validators.required),
    codProcedimentoTres: new FormControl(null, Validators.required),
    condutaTres: new FormControl(null, Validators.required),
    dataAtendimentoQuatro: new FormControl(null, Validators.required),
    codProcedimentoQuatro: new FormControl(null, Validators.required),
    condutaQuatro: new FormControl(null, Validators.required),
    dataAtendimentoCinco: new FormControl(null, Validators.required),
    codProcedimentoCinco: new FormControl(null, Validators.required),
    condutaCinco: new FormControl(null, Validators.required),
    dataAtendimentoSeis: new FormControl(null, Validators.required),
    codProcedimentoSeis: new FormControl(null, Validators.required),
    condutaSeis: new FormControl(null, Validators.required),
    dataAtendimentoSete: new FormControl(null, Validators.required),
    codProcedimentoSete: new FormControl(null, Validators.required),
    condutaSete: new FormControl(null, Validators.required),
    dataAtendimentoOito: new FormControl(null, Validators.required),
    codProcedimentoOito: new FormControl(null, Validators.required),
    condutaOito: new FormControl(null, Validators.required),
    dataAtendimentoNove: new FormControl(null, Validators.required),
    codProcedimentoNove: new FormControl(null, Validators.required),
    condutaNove: new FormControl(null, Validators.required),
    dataAtendimentoDez: new FormControl(null, Validators.required),
    codProcedimentoDez: new FormControl(null, Validators.required),
    condutaDez: new FormControl(null, Validators.required)

  })

  constructor() { }

  ngOnInit(): void {
  }

  checkCampos(){
    if(this.formEvolucaoFisco.get('dataAtendimentoUm').value == ""){
      this.formEvolucaoFisco.get('dataAtendimentoUm').setValue(null);
    }
    if(this.formEvolucaoFisco.get('codProcedimentoUm').value == ""){
      this.formEvolucaoFisco.get('codProcedimentoUm').setValue(null);
    }
    if(this.formEvolucaoFisco.get('condutaUm').value == ""){
      this.formEvolucaoFisco.get('condutaUm').setValue(null);
    }
    if(this.formEvolucaoFisco.get('dataAtendimentoDois').value == ""){
      this.formEvolucaoFisco.get('dataAtendimentoDois').setValue(null);
    }
    if(this.formEvolucaoFisco.get('codProcedimentoDois').value == ""){
      this.formEvolucaoFisco.get('codProcedimentoDois').setValue(null);
    }
    if(this.formEvolucaoFisco.get('condutaDois').value == ""){
      this.formEvolucaoFisco.get('condutaDois').setValue(null);
    }
    if(this.formEvolucaoFisco.get('dataAtendimentoTres').value == ""){
      this.formEvolucaoFisco.get('dataAtendimentoTres').setValue(null);
    }
    if(this.formEvolucaoFisco.get('codProcedimentoTres').value == ""){
      this.formEvolucaoFisco.get('codProcedimentoTres').setValue(null);
    }
    if(this.formEvolucaoFisco.get('condutaTres').value == ""){
      this.formEvolucaoFisco.get('condutaTres').setValue(null);
    }
    if(this.formEvolucaoFisco.get('dataAtendimentoQuatro').value == ""){
      this.formEvolucaoFisco.get('dataAtendimentoQuatro').setValue(null);
    }
    if(this.formEvolucaoFisco.get('codProcedimentoQuatro').value == ""){
      this.formEvolucaoFisco.get('codProcedimentoQuatro').setValue(null);
    }
    if(this.formEvolucaoFisco.get('condutaQuatro').value == ""){
      this.formEvolucaoFisco.get('condutaQuatro').setValue(null);
    }
    if(this.formEvolucaoFisco.get('dataAtendimentoCinco').value == ""){
      this.formEvolucaoFisco.get('dataAtendimentoCinco').setValue(null);
    }
    if(this.formEvolucaoFisco.get('codProcedimentoCinco').value == ""){
      this.formEvolucaoFisco.get('codProcedimentoCinco').setValue(null);
    }
    if(this.formEvolucaoFisco.get('condutaCinco').value == ""){
      this.formEvolucaoFisco.get('condutaCinco').setValue(null);
    }
    if(this.formEvolucaoFisco.get('dataAtendimentoSeis').value == ""){
      this.formEvolucaoFisco.get('dataAtendimentoSeis').setValue(null);
    }
    if(this.formEvolucaoFisco.get('codProcedimentoSeis').value == ""){
      this.formEvolucaoFisco.get('codProcedimentoSeis').setValue(null);
    }
    if(this.formEvolucaoFisco.get('condutaSeis').value == ""){
      this.formEvolucaoFisco.get('condutaSeis').setValue(null);
    }
    if(this.formEvolucaoFisco.get('dataAtendimentoSete').value == ""){
      this.formEvolucaoFisco.get('dataAtendimentoSete').setValue(null);
    }
    if(this.formEvolucaoFisco.get('codProcedimentoSete').value == ""){
      this.formEvolucaoFisco.get('codProcedimentoSete').setValue(null);
    }
    if(this.formEvolucaoFisco.get('condutaSete').value == ""){
      this.formEvolucaoFisco.get('condutaSete').setValue(null);
    }
    if(this.formEvolucaoFisco.get('dataAtendimentoOito').value == ""){
      this.formEvolucaoFisco.get('dataAtendimentoOito').setValue(null);
    }
    if(this.formEvolucaoFisco.get('codProcedimentoOito').value == ""){
      this.formEvolucaoFisco.get('codProcedimentoOito').setValue(null);
    }
    if(this.formEvolucaoFisco.get('condutaOito').value == ""){
      this.formEvolucaoFisco.get('condutaOito').setValue(null);
    }
    if(this.formEvolucaoFisco.get('dataAtendimentoNove').value == ""){
      this.formEvolucaoFisco.get('dataAtendimentoNove').setValue(null);
    }
    if(this.formEvolucaoFisco.get('codProcedimentoNove').value == ""){
      this.formEvolucaoFisco.get('codProcedimentoNove').setValue(null);
    }
    if(this.formEvolucaoFisco.get('condutaNove').value == ""){
      this.formEvolucaoFisco.get('condutaNove').setValue(null);
    }
    if(this.formEvolucaoFisco.get('dataAtendimentoDez').value == ""){
      this.formEvolucaoFisco.get('dataAtendimentoDez').setValue(null);
    }
    if(this.formEvolucaoFisco.get('codProcedimentoDez').value == ""){
      this.formEvolucaoFisco.get('codProcedimentoDez').setValue(null);
    }
    if(this.formEvolucaoFisco.get('condutaDez').value == ""){
      this.formEvolucaoFisco.get('condutaDez').setValue(null);
    }

  }

}
