import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-convenio-geap',
  templateUrl: './convenio-geap.component.html',
  styleUrls: ['./convenio-geap.component.css']
})
export class ConvenioGeapComponent implements OnInit {

  mostrarEvolucao: boolean = false;

  geapForm = new FormGroup ({
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
    if(this.geapForm.get('cooperado').value === ""){
      this.geapForm.get('cooperado').setValue(null);
    }
    if(this.geapForm.get('paciente').value === ""){
      this.geapForm.get('paciente').setValue(null);
    }
    if(this.geapForm.get('mesFaturamento').value === ''){
      this.geapForm.get('mesFaturamento').setValue(null);
    }
    if(this.geapForm.get('anoFaturamento').value == ""){
      this.geapForm.get('anoFaturamento').setValue(null);
    }
    if(this.geapForm.get('tipoGuia').value == ""){
      this.geapForm.get('tipoGuia').setValue(null);
    }
    if(this.geapForm.get('dataHoraLimite').value == ""){
      this.geapForm.get('dataHoraLimite').setValue(null);
    }
    if(this.geapForm.get('registroANS').value == ""){
      this.geapForm.get('registroANS').setValue(null);
    }
    if(this.geapForm.get('nGuiaPrestador').value == ""){
      this.geapForm.get('nGuiaPrestador').setValue(null);
    }
    if(this.geapForm.get('nGuiaPrincipal').value == ""){
      this.geapForm.get('nGuiaPrincipal').setValue(null);
    }
    if(this.geapForm.get('dataAutorizacao').value == ""){
      this.geapForm.get('dataAutorizacao').setValue(null);
    }
    if(this.geapForm.get('senhaGuia').value == ""){
      this.geapForm.get('senhaGuia').setValue(null);
    }
    if(this.geapForm.get('validadeSenha').value == ""){
      this.geapForm.get('validadeSenha').setValue(null);
    }
    if(this.geapForm.get('nGuiaOperadora').value == ""){
      this.geapForm.get('nGuiaOperadora').setValue(null);
    }
    if(this.geapForm.get('nCarteira').value == ""){
      this.geapForm.get('nCarteira').setValue(null);
    }
    if(this.geapForm.get('codProcedimentoUm').value == ""){
      this.geapForm.get('codProcedimentoUm').setValue(null);
    }
    if(this.geapForm.get('qtdSolicitadaUm').value == ""){
      this.geapForm.get('qtdSolicitadaUm').setValue(null);
    }
    if(this.geapForm.get('qtdAutorizadaUm').value == ""){
      this.geapForm.get('qtdAutorizadaUm').setValue(null);
    }
    if(this.geapForm.get('codProcedimentoDois').value == ""){
      this.geapForm.get('codProcedimentoDois').setValue(null);
    }
    if(this.geapForm.get('qtdSolicitadaDois').value == ""){
      this.geapForm.get('qtdSolicitadaDois').setValue(null);
    }
    if(this.geapForm.get('qtdAutorizadaDois').value == ""){
      this.geapForm.get('qtdAutorizadaDois').setValue(null);
    }
    if(this.geapForm.get('observacao').value == ""){
      this.geapForm.get('observacao').setValue(null);
    }
    if(this.geapForm.get('tipoAtendimento').value == ""){
      this.geapForm.get('tipoAtendimento').setValue(null);
    }
    if(this.geapForm.get('tempoAtendimento').value == ""){
      this.geapForm.get('tempoAtendimento').setValue(null);
    }
    
  }  

}
