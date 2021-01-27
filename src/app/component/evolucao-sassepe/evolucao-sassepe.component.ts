import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-evolucao-sassepe',
  templateUrl: './evolucao-sassepe.component.html',
  styleUrls: ['./evolucao-sassepe.component.css']
})
export class EvolucaoSassepeComponent implements OnInit {

  formEvolucaoSassepe = new FormGroup({
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
    if(this.formEvolucaoSassepe.get('dataAtendimentoUm').value == ""){
      this.formEvolucaoSassepe.get('dataAtendimentoUm').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('codProcedimentoUm').value == ""){
      this.formEvolucaoSassepe.get('codProcedimentoUm').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('condutaUm').value == ""){
      this.formEvolucaoSassepe.get('condutaUm').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('dataAtendimentoDois').value == ""){
      this.formEvolucaoSassepe.get('dataAtendimentoDois').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('codProcedimentoDois').value == ""){
      this.formEvolucaoSassepe.get('codProcedimentoDois').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('condutaDois').value == ""){
      this.formEvolucaoSassepe.get('condutaDois').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('dataAtendimentoTres').value == ""){
      this.formEvolucaoSassepe.get('dataAtendimentoTres').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('codProcedimentoTres').value == ""){
      this.formEvolucaoSassepe.get('codProcedimentoTres').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('condutaTres').value == ""){
      this.formEvolucaoSassepe.get('condutaTres').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('dataAtendimentoQuatro').value == ""){
      this.formEvolucaoSassepe.get('dataAtendimentoQuatro').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('codProcedimentoQuatro').value == ""){
      this.formEvolucaoSassepe.get('codProcedimentoQuatro').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('condutaQuatro').value == ""){
      this.formEvolucaoSassepe.get('condutaQuatro').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('dataAtendimentoCinco').value == ""){
      this.formEvolucaoSassepe.get('dataAtendimentoCinco').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('codProcedimentoCinco').value == ""){
      this.formEvolucaoSassepe.get('codProcedimentoCinco').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('condutaCinco').value == ""){
      this.formEvolucaoSassepe.get('condutaCinco').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('dataAtendimentoSeis').value == ""){
      this.formEvolucaoSassepe.get('dataAtendimentoSeis').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('codProcedimentoSeis').value == ""){
      this.formEvolucaoSassepe.get('codProcedimentoSeis').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('condutaSeis').value == ""){
      this.formEvolucaoSassepe.get('condutaSeis').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('dataAtendimentoSete').value == ""){
      this.formEvolucaoSassepe.get('dataAtendimentoSete').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('codProcedimentoSete').value == ""){
      this.formEvolucaoSassepe.get('codProcedimentoSete').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('condutaSete').value == ""){
      this.formEvolucaoSassepe.get('condutaSete').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('dataAtendimentoOito').value == ""){
      this.formEvolucaoSassepe.get('dataAtendimentoOito').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('codProcedimentoOito').value == ""){
      this.formEvolucaoSassepe.get('codProcedimentoOito').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('condutaOito').value == ""){
      this.formEvolucaoSassepe.get('condutaOito').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('dataAtendimentoNove').value == ""){
      this.formEvolucaoSassepe.get('dataAtendimentoNove').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('codProcedimentoNove').value == ""){
      this.formEvolucaoSassepe.get('codProcedimentoNove').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('condutaNove').value == ""){
      this.formEvolucaoSassepe.get('condutaNove').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('dataAtendimentoDez').value == ""){
      this.formEvolucaoSassepe.get('dataAtendimentoDez').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('codProcedimentoDez').value == ""){
      this.formEvolucaoSassepe.get('codProcedimentoDez').setValue(null);
    }
    if(this.formEvolucaoSassepe.get('condutaDez').value == ""){
      this.formEvolucaoSassepe.get('condutaDez').setValue(null);
    }

  }

}
