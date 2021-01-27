import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-convenio-fisco',
  templateUrl: './convenio-fisco.component.html',
  styleUrls: ['./convenio-fisco.component.css']
})
export class ConvenioFiscoComponent implements OnInit {

  mostrarEvolucao: boolean = false;

  fiscoForm = new FormGroup ({
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
    if(this.fiscoForm.get('cooperado').value === ""){
      this.fiscoForm.get('cooperado').setValue(null);
    }
    if(this.fiscoForm.get('paciente').value === ""){
      this.fiscoForm.get('paciente').setValue(null);
    }

    if(this.fiscoForm.get('mesFaturamento').value === ''){
      this.fiscoForm.get('mesFaturamento').setValue(null);
    }
 
    if(this.fiscoForm.get('anoFaturamento').value == ""){
      this.fiscoForm.get('anoFaturamento').setValue(null);
    }
    if(this.fiscoForm.get('tipoGuia').value == ""){
      this.fiscoForm.get('tipoGuia').setValue(null);
    }
    if(this.fiscoForm.get('dataHoraLimite').value == ""){
      this.fiscoForm.get('dataHoraLimite').setValue(null);
    }
    if(this.fiscoForm.get('registroANS').value == ""){
      this.fiscoForm.get('registroANS').setValue(null);
    }
    if(this.fiscoForm.get('nGuiaPrestador').value == ""){
      this.fiscoForm.get('nGuiaPrestador').setValue(null);
    }
    if(this.fiscoForm.get('nGuiaPrincipal').value == ""){
      this.fiscoForm.get('nGuiaPrincipal').setValue(null);
    }
    if(this.fiscoForm.get('dataAutorizacao').value == ""){
      this.fiscoForm.get('dataAutorizacao').setValue(null);
    }
    if(this.fiscoForm.get('senhaGuia').value == ""){
      this.fiscoForm.get('senhaGuia').setValue(null);
    }
    if(this.fiscoForm.get('validadeSenha').value == ""){
      this.fiscoForm.get('validadeSenha').setValue(null);
    }
    if(this.fiscoForm.get('nGuiaOperadora').value == ""){
      this.fiscoForm.get('nGuiaOperadora').setValue(null);
    }
    if(this.fiscoForm.get('nCarteira').value == ""){
      this.fiscoForm.get('nCarteira').setValue(null);
    }
    if(this.fiscoForm.get('codProcedimentoUm').value == ""){
      this.fiscoForm.get('codProcedimentoUm').setValue(null);
    }
    if(this.fiscoForm.get('qtdSolicitadaUm').value == ""){
      this.fiscoForm.get('qtdSolicitadaUm').setValue(null);
    }
    if(this.fiscoForm.get('qtdAutorizadaUm').value == ""){
      this.fiscoForm.get('qtdAutorizadaUm').setValue(null);
    }
    if(this.fiscoForm.get('codProcedimentoDois').value == ""){
      this.fiscoForm.get('codProcedimentoDois').setValue(null);
    }
    if(this.fiscoForm.get('qtdSolicitadaDois').value == ""){
      this.fiscoForm.get('qtdSolicitadaDois').setValue(null);
    }
    if(this.fiscoForm.get('qtdAutorizadaDois').value == ""){
      this.fiscoForm.get('qtdAutorizadaDois').setValue(null);
    }
    if(this.fiscoForm.get('observacao').value == ""){
      this.fiscoForm.get('observacao').setValue(null);
    }
    if(this.fiscoForm.get('tipoAtendimento').value == ""){
      this.fiscoForm.get('tipoAtendimento').setValue(null);
    }
    if(this.fiscoForm.get('tempoAtendimento').value == ""){
      this.fiscoForm.get('tempoAtendimento').setValue(null);
    }
    
  }

}

