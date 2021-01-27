import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-evolucao-fusex',
  templateUrl: './evolucao-fusex.component.html',
  styleUrls: ['./evolucao-fusex.component.css']
})
export class EvolucaoFusexComponent implements OnInit {

  formEvolucaoFusex = new FormGroup({
    tempoAtendimento: new FormControl(null, Validators.required),
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
    if(this.formEvolucaoFusex.get('tempoAtendimento').value == ""){
      this.formEvolucaoFusex.get('tempoAtendimento').setValue(null);
    }
    if(this.formEvolucaoFusex.get('dataAtendimentoUm').value == ""){
      this.formEvolucaoFusex.get('dataAtendimentoUm').setValue(null);
    }
    if(this.formEvolucaoFusex.get('codProcedimentoUm').value == ""){
      this.formEvolucaoFusex.get('codProcedimentoUm').setValue(null);
    }
    if(this.formEvolucaoFusex.get('condutaUm').value == ""){
      this.formEvolucaoFusex.get('condutaUm').setValue(null);
    }
    if(this.formEvolucaoFusex.get('dataAtendimentoDois').value == ""){
      this.formEvolucaoFusex.get('dataAtendimentoDois').setValue(null);
    }
    if(this.formEvolucaoFusex.get('codProcedimentoDois').value == ""){
      this.formEvolucaoFusex.get('codProcedimentoDois').setValue(null);
    }
    if(this.formEvolucaoFusex.get('condutaDois').value == ""){
      this.formEvolucaoFusex.get('condutaDois').setValue(null);
    }
    if(this.formEvolucaoFusex.get('dataAtendimentoTres').value == ""){
      this.formEvolucaoFusex.get('dataAtendimentoTres').setValue(null);
    }
    if(this.formEvolucaoFusex.get('codProcedimentoTres').value == ""){
      this.formEvolucaoFusex.get('codProcedimentoTres').setValue(null);
    }
    if(this.formEvolucaoFusex.get('condutaTres').value == ""){
      this.formEvolucaoFusex.get('condutaTres').setValue(null);
    }
    if(this.formEvolucaoFusex.get('dataAtendimentoQuatro').value == ""){
      this.formEvolucaoFusex.get('dataAtendimentoQuatro').setValue(null);
    }
    if(this.formEvolucaoFusex.get('codProcedimentoQuatro').value == ""){
      this.formEvolucaoFusex.get('codProcedimentoQuatro').setValue(null);
    }
    if(this.formEvolucaoFusex.get('condutaQuatro').value == ""){
      this.formEvolucaoFusex.get('condutaQuatro').setValue(null);
    }
    if(this.formEvolucaoFusex.get('dataAtendimentoCinco').value == ""){
      this.formEvolucaoFusex.get('dataAtendimentoCinco').setValue(null);
    }
    if(this.formEvolucaoFusex.get('codProcedimentoCinco').value == ""){
      this.formEvolucaoFusex.get('codProcedimentoCinco').setValue(null);
    }
    if(this.formEvolucaoFusex.get('condutaCinco').value == ""){
      this.formEvolucaoFusex.get('condutaCinco').setValue(null);
    }
    if(this.formEvolucaoFusex.get('dataAtendimentoSeis').value == ""){
      this.formEvolucaoFusex.get('dataAtendimentoSeis').setValue(null);
    }
    if(this.formEvolucaoFusex.get('codProcedimentoSeis').value == ""){
      this.formEvolucaoFusex.get('codProcedimentoSeis').setValue(null);
    }
    if(this.formEvolucaoFusex.get('condutaSeis').value == ""){
      this.formEvolucaoFusex.get('condutaSeis').setValue(null);
    }
    if(this.formEvolucaoFusex.get('dataAtendimentoSete').value == ""){
      this.formEvolucaoFusex.get('dataAtendimentoSete').setValue(null);
    }
    if(this.formEvolucaoFusex.get('codProcedimentoSete').value == ""){
      this.formEvolucaoFusex.get('codProcedimentoSete').setValue(null);
    }
    if(this.formEvolucaoFusex.get('condutaSete').value == ""){
      this.formEvolucaoFusex.get('condutaSete').setValue(null);
    }
    if(this.formEvolucaoFusex.get('dataAtendimentoOito').value == ""){
      this.formEvolucaoFusex.get('dataAtendimentoOito').setValue(null);
    }
    if(this.formEvolucaoFusex.get('codProcedimentoOito').value == ""){
      this.formEvolucaoFusex.get('codProcedimentoOito').setValue(null);
    }
    if(this.formEvolucaoFusex.get('condutaOito').value == ""){
      this.formEvolucaoFusex.get('condutaOito').setValue(null);
    }
    if(this.formEvolucaoFusex.get('dataAtendimentoNove').value == ""){
      this.formEvolucaoFusex.get('dataAtendimentoNove').setValue(null);
    }
    if(this.formEvolucaoFusex.get('codProcedimentoNove').value == ""){
      this.formEvolucaoFusex.get('codProcedimentoNove').setValue(null);
    }
    if(this.formEvolucaoFusex.get('condutaNove').value == ""){
      this.formEvolucaoFusex.get('condutaNove').setValue(null);
    }
    if(this.formEvolucaoFusex.get('dataAtendimentoDez').value == ""){
      this.formEvolucaoFusex.get('dataAtendimentoDez').setValue(null);
    }
    if(this.formEvolucaoFusex.get('codProcedimentoDez').value == ""){
      this.formEvolucaoFusex.get('codProcedimentoDez').setValue(null);
    }
    if(this.formEvolucaoFusex.get('condutaDez').value == ""){
      this.formEvolucaoFusex.get('condutaDez').setValue(null);
    }

  }

}
