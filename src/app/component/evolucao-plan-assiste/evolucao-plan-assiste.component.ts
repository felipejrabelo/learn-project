import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-evolucao-plan-assiste',
  templateUrl: './evolucao-plan-assiste.component.html',
  styleUrls: ['./evolucao-plan-assiste.component.css']
})
export class EvolucaoPlanAssisteComponent implements OnInit {

  formEvolucaoPlanAssiste = new FormGroup({
    
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
    if(this.formEvolucaoPlanAssiste.get('tempoAtendimento').value == ""){
      this.formEvolucaoPlanAssiste.get('tempoAtendimento').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('dataAtendimentoUm').value == ""){
      this.formEvolucaoPlanAssiste.get('dataAtendimentoUm').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('codProcedimentoUm').value == ""){
      this.formEvolucaoPlanAssiste.get('codProcedimentoUm').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('condutaUm').value == ""){
      this.formEvolucaoPlanAssiste.get('condutaUm').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('dataAtendimentoDois').value == ""){
      this.formEvolucaoPlanAssiste.get('dataAtendimentoDois').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('codProcedimentoDois').value == ""){
      this.formEvolucaoPlanAssiste.get('codProcedimentoDois').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('condutaDois').value == ""){
      this.formEvolucaoPlanAssiste.get('condutaDois').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('dataAtendimentoTres').value == ""){
      this.formEvolucaoPlanAssiste.get('dataAtendimentoTres').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('codProcedimentoTres').value == ""){
      this.formEvolucaoPlanAssiste.get('codProcedimentoTres').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('condutaTres').value == ""){
      this.formEvolucaoPlanAssiste.get('condutaTres').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('dataAtendimentoQuatro').value == ""){
      this.formEvolucaoPlanAssiste.get('dataAtendimentoQuatro').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('codProcedimentoQuatro').value == ""){
      this.formEvolucaoPlanAssiste.get('codProcedimentoQuatro').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('condutaQuatro').value == ""){
      this.formEvolucaoPlanAssiste.get('condutaQuatro').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('dataAtendimentoCinco').value == ""){
      this.formEvolucaoPlanAssiste.get('dataAtendimentoCinco').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('codProcedimentoCinco').value == ""){
      this.formEvolucaoPlanAssiste.get('codProcedimentoCinco').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('condutaCinco').value == ""){
      this.formEvolucaoPlanAssiste.get('condutaCinco').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('dataAtendimentoSeis').value == ""){
      this.formEvolucaoPlanAssiste.get('dataAtendimentoSeis').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('codProcedimentoSeis').value == ""){
      this.formEvolucaoPlanAssiste.get('codProcedimentoSeis').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('condutaSeis').value == ""){
      this.formEvolucaoPlanAssiste.get('condutaSeis').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('dataAtendimentoSete').value == ""){
      this.formEvolucaoPlanAssiste.get('dataAtendimentoSete').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('codProcedimentoSete').value == ""){
      this.formEvolucaoPlanAssiste.get('codProcedimentoSete').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('condutaSete').value == ""){
      this.formEvolucaoPlanAssiste.get('condutaSete').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('dataAtendimentoOito').value == ""){
      this.formEvolucaoPlanAssiste.get('dataAtendimentoOito').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('codProcedimentoOito').value == ""){
      this.formEvolucaoPlanAssiste.get('codProcedimentoOito').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('condutaOito').value == ""){
      this.formEvolucaoPlanAssiste.get('condutaOito').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('dataAtendimentoNove').value == ""){
      this.formEvolucaoPlanAssiste.get('dataAtendimentoNove').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('codProcedimentoNove').value == ""){
      this.formEvolucaoPlanAssiste.get('codProcedimentoNove').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('condutaNove').value == ""){
      this.formEvolucaoPlanAssiste.get('condutaNove').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('dataAtendimentoDez').value == ""){
      this.formEvolucaoPlanAssiste.get('dataAtendimentoDez').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('codProcedimentoDez').value == ""){
      this.formEvolucaoPlanAssiste.get('codProcedimentoDez').setValue(null);
    }
    if(this.formEvolucaoPlanAssiste.get('condutaDez').value == ""){
      this.formEvolucaoPlanAssiste.get('condutaDez').setValue(null);
    }
  }

}
