import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-convenio-plan-assiste',
  templateUrl: './convenio-plan-assiste.component.html',
  styleUrls: ['./convenio-plan-assiste.component.css']
})
export class ConvenioPlanAssisteComponent implements OnInit {

  mostrarEvolucao: boolean = false;

  planAssistForm = new FormGroup ({
    cooperado: new FormControl(null, Validators.required),
    paciente: new FormControl(null, Validators.required),
    mesFaturamento: new FormControl(null, Validators.required),
    anoFaturamento: new FormControl(null, Validators.required),
    tipoGuia: new FormControl(null, Validators.required),
    dataHoraLimite: new FormControl(null, Validators.required),
    nGuiaPrestador: new FormControl(null, Validators.required),
    nGuiaPrincipal: new FormControl(null, Validators.required),
    dataAutorizacao: new FormControl(null, Validators.required),
    senhaGuia: new FormControl(null, Validators.required),
    validadeSenha: new FormControl(null, Validators.required),
    nGuiaOperadora: new FormControl(null, Validators.required),
    nCarteira: new FormControl(null, Validators.required),
    codProcedimentoUm: new FormControl(null, Validators.required),
    qtdSolicitadaUm: new FormControl(null, Validators.required),
    qtdAutorizadaUm: new FormControl(null, Validators.required),
    codProcedimentoDois: new FormControl(null, Validators.required),
    qtdSolicitadaDois: new FormControl(null, Validators.required),
    qtdAutorizadaDois: new FormControl(null, Validators.required),
    observacao: new FormControl(null, Validators.required),
    tipoAtendimento: new FormControl(null, Validators.required),
    tempoAtendimento: new FormControl(null, Validators.required),

  })
  constructor() { }

  ngOnInit(): void {
  }

  evolucao(){
    this.mostrarEvolucao = true;
  }
  capa(){
    this.mostrarEvolucao = false;
  }
  
  checkCampos(){
    if(this.planAssistForm.get('cooperado').value === ""){
      this.planAssistForm.get('cooperado').setValue(null);
    }
    if(this.planAssistForm.get('paciente').value === ""){
      this.planAssistForm.get('paciente').setValue(null);
    }
    if(this.planAssistForm.get('mesFaturamento').value === ''){
      this.planAssistForm.get('mesFaturamento').setValue(null);
    }
    if(this.planAssistForm.get('anoFaturamento').value == ""){
      this.planAssistForm.get('anoFaturamento').setValue(null);
    }
    if(this.planAssistForm.get('tipoGuia').value == ""){
      this.planAssistForm.get('tipoGuia').setValue(null);
    }
    if(this.planAssistForm.get('dataHoraLimite').value == ""){
      this.planAssistForm.get('dataHoraLimite').setValue(null);
    }
    if(this.planAssistForm.get('registroANS').value == ""){
      this.planAssistForm.get('registroANS').setValue(null);
    }
    if(this.planAssistForm.get('nGuiaPrestador').value == ""){
      this.planAssistForm.get('nGuiaPrestador').setValue(null);
    }
    if(this.planAssistForm.get('nGuiaPrincipal').value == ""){
      this.planAssistForm.get('nGuiaPrincipal').setValue(null);
    }
    if(this.planAssistForm.get('dataAutorizacao').value == ""){
      this.planAssistForm.get('dataAutorizacao').setValue(null);
    }
    if(this.planAssistForm.get('senhaGuia').value == ""){
      this.planAssistForm.get('senhaGuia').setValue(null);
    }
    if(this.planAssistForm.get('validadeSenha').value == ""){
      this.planAssistForm.get('validadeSenha').setValue(null);
    }
    if(this.planAssistForm.get('nGuiaOperadora').value == ""){
      this.planAssistForm.get('nGuiaOperadora').setValue(null);
    }
    if(this.planAssistForm.get('nCarteira').value == ""){
      this.planAssistForm.get('nCarteira').setValue(null);
    }
    if(this.planAssistForm.get('codProcedimentoUm').value == ""){
      this.planAssistForm.get('codProcedimentoUm').setValue(null);
    }
    if(this.planAssistForm.get('qtdSolicitadaUm').value == ""){
      this.planAssistForm.get('qtdSolicitadaUm').setValue(null);
    }
    if(this.planAssistForm.get('qtdAutorizadaUm').value == ""){
      this.planAssistForm.get('qtdAutorizadaUm').setValue(null);
    }
    if(this.planAssistForm.get('codProcedimentoDois').value == ""){
      this.planAssistForm.get('codProcedimentoDois').setValue(null);
    }
    if(this.planAssistForm.get('qtdSolicitadaDois').value == ""){
      this.planAssistForm.get('qtdSolicitadaDois').setValue(null);
    }
    if(this.planAssistForm.get('qtdAutorizadaDois').value == ""){
      this.planAssistForm.get('qtdAutorizadaDois').setValue(null);
    }
    if(this.planAssistForm.get('observacao').value == ""){
      this.planAssistForm.get('observacao').setValue(null);
    }
    if(this.planAssistForm.get('tipoAtendimento').value == ""){
      this.planAssistForm.get('tipoAtendimento').setValue(null);
    }
    if(this.planAssistForm.get('tempoAtendimento').value == ""){
      this.planAssistForm.get('tempoAtendimento').setValue(null);
    }
  }  

}
