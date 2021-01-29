import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-evolucao-geap',
  templateUrl: './evolucao-geap.component.html',
  styleUrls: ['./evolucao-geap.component.css']
})
export class EvolucaoGeapComponent implements OnInit {

  formEvolucaoGeap = new FormGroup({
    
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
    if(this.formEvolucaoGeap.get('tempoAtendimento').value == ""){
      this.formEvolucaoGeap.get('tempoAtendimento').setValue(null);
    }
    if(this.formEvolucaoGeap.get('dataAtendimentoUm').value == ""){
      this.formEvolucaoGeap.get('dataAtendimentoUm').setValue(null);
    }
    if(this.formEvolucaoGeap.get('codProcedimentoUm').value == ""){
      this.formEvolucaoGeap.get('codProcedimentoUm').setValue(null);
    }
    if(this.formEvolucaoGeap.get('condutaUm').value == ""){
      this.formEvolucaoGeap.get('condutaUm').setValue(null);
    }
    if(this.formEvolucaoGeap.get('dataAtendimentoDois').value == ""){
      this.formEvolucaoGeap.get('dataAtendimentoDois').setValue(null);
    }
    if(this.formEvolucaoGeap.get('codProcedimentoDois').value == ""){
      this.formEvolucaoGeap.get('codProcedimentoDois').setValue(null);
    }
    if(this.formEvolucaoGeap.get('condutaDois').value == ""){
      this.formEvolucaoGeap.get('condutaDois').setValue(null);
    }
    if(this.formEvolucaoGeap.get('dataAtendimentoTres').value == ""){
      this.formEvolucaoGeap.get('dataAtendimentoTres').setValue(null);
    }
    if(this.formEvolucaoGeap.get('codProcedimentoTres').value == ""){
      this.formEvolucaoGeap.get('codProcedimentoTres').setValue(null);
    }
    if(this.formEvolucaoGeap.get('condutaTres').value == ""){
      this.formEvolucaoGeap.get('condutaTres').setValue(null);
    }
    if(this.formEvolucaoGeap.get('dataAtendimentoQuatro').value == ""){
      this.formEvolucaoGeap.get('dataAtendimentoQuatro').setValue(null);
    }
    if(this.formEvolucaoGeap.get('codProcedimentoQuatro').value == ""){
      this.formEvolucaoGeap.get('codProcedimentoQuatro').setValue(null);
    }
    if(this.formEvolucaoGeap.get('condutaQuatro').value == ""){
      this.formEvolucaoGeap.get('condutaQuatro').setValue(null);
    }
    if(this.formEvolucaoGeap.get('dataAtendimentoCinco').value == ""){
      this.formEvolucaoGeap.get('dataAtendimentoCinco').setValue(null);
    }
    if(this.formEvolucaoGeap.get('codProcedimentoCinco').value == ""){
      this.formEvolucaoGeap.get('codProcedimentoCinco').setValue(null);
    }
    if(this.formEvolucaoGeap.get('condutaCinco').value == ""){
      this.formEvolucaoGeap.get('condutaCinco').setValue(null);
    }
    if(this.formEvolucaoGeap.get('dataAtendimentoSeis').value == ""){
      this.formEvolucaoGeap.get('dataAtendimentoSeis').setValue(null);
    }
    if(this.formEvolucaoGeap.get('codProcedimentoSeis').value == ""){
      this.formEvolucaoGeap.get('codProcedimentoSeis').setValue(null);
    }
    if(this.formEvolucaoGeap.get('condutaSeis').value == ""){
      this.formEvolucaoGeap.get('condutaSeis').setValue(null);
    }
    if(this.formEvolucaoGeap.get('dataAtendimentoSete').value == ""){
      this.formEvolucaoGeap.get('dataAtendimentoSete').setValue(null);
    }
    if(this.formEvolucaoGeap.get('codProcedimentoSete').value == ""){
      this.formEvolucaoGeap.get('codProcedimentoSete').setValue(null);
    }
    if(this.formEvolucaoGeap.get('condutaSete').value == ""){
      this.formEvolucaoGeap.get('condutaSete').setValue(null);
    }
    if(this.formEvolucaoGeap.get('dataAtendimentoOito').value == ""){
      this.formEvolucaoGeap.get('dataAtendimentoOito').setValue(null);
    }
    if(this.formEvolucaoGeap.get('codProcedimentoOito').value == ""){
      this.formEvolucaoGeap.get('codProcedimentoOito').setValue(null);
    }
    if(this.formEvolucaoGeap.get('condutaOito').value == ""){
      this.formEvolucaoGeap.get('condutaOito').setValue(null);
    }
    if(this.formEvolucaoGeap.get('dataAtendimentoNove').value == ""){
      this.formEvolucaoGeap.get('dataAtendimentoNove').setValue(null);
    }
    if(this.formEvolucaoGeap.get('codProcedimentoNove').value == ""){
      this.formEvolucaoGeap.get('codProcedimentoNove').setValue(null);
    }
    if(this.formEvolucaoGeap.get('condutaNove').value == ""){
      this.formEvolucaoGeap.get('condutaNove').setValue(null);
    }
    if(this.formEvolucaoGeap.get('dataAtendimentoDez').value == ""){
      this.formEvolucaoGeap.get('dataAtendimentoDez').setValue(null);
    }
    if(this.formEvolucaoGeap.get('codProcedimentoDez').value == ""){
      this.formEvolucaoGeap.get('codProcedimentoDez').setValue(null);
    }
    if(this.formEvolucaoGeap.get('condutaDez').value == ""){
      this.formEvolucaoGeap.get('condutaDez').setValue(null);
    }
  }

}
