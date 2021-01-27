import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-convenio-fusex',
  templateUrl: './convenio-fusex.component.html',
  styleUrls: ['./convenio-fusex.component.css']
})
export class ConvenioFusexComponent implements OnInit {

  mostrarEvolucao: boolean = false;

  fusexForm = new FormGroup ({
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
    if(this.fusexForm.get('cooperado').value === ""){
      this.fusexForm.get('cooperado').setValue(null);
    }
    if(this.fusexForm.get('paciente').value === ""){
      this.fusexForm.get('paciente').setValue(null);
    }

    if(this.fusexForm.get('mesFaturamento').value === ''){
      this.fusexForm.get('mesFaturamento').setValue(null);
    }
 
    if(this.fusexForm.get('anoFaturamento').value == ""){
      this.fusexForm.get('anoFaturamento').setValue(null);
    }
    if(this.fusexForm.get('tipoGuia').value == ""){
      this.fusexForm.get('tipoGuia').setValue(null);
    }
    if(this.fusexForm.get('dataHoraLimite').value == ""){
      this.fusexForm.get('dataHoraLimite').setValue(null);
    }
    if(this.fusexForm.get('registroANS').value == ""){
      this.fusexForm.get('registroANS').setValue(null);
    }
    if(this.fusexForm.get('nGuiaPrestador').value == ""){
      this.fusexForm.get('nGuiaPrestador').setValue(null);
    }
    if(this.fusexForm.get('nGuiaPrincipal').value == ""){
      this.fusexForm.get('nGuiaPrincipal').setValue(null);
    }
    if(this.fusexForm.get('dataAutorizacao').value == ""){
      this.fusexForm.get('dataAutorizacao').setValue(null);
    }
    if(this.fusexForm.get('senhaGuia').value == ""){
      this.fusexForm.get('senhaGuia').setValue(null);
    }
    if(this.fusexForm.get('validadeSenha').value == ""){
      this.fusexForm.get('validadeSenha').setValue(null);
    }
    if(this.fusexForm.get('nGuiaOperadora').value == ""){
      this.fusexForm.get('nGuiaOperadora').setValue(null);
    }
    if(this.fusexForm.get('nCarteira').value == ""){
      this.fusexForm.get('nCarteira').setValue(null);
    }
    if(this.fusexForm.get('codProcedimentoUm').value == ""){
      this.fusexForm.get('codProcedimentoUm').setValue(null);
    }
    if(this.fusexForm.get('qtdSolicitadaUm').value == ""){
      this.fusexForm.get('qtdSolicitadaUm').setValue(null);
    }
    if(this.fusexForm.get('qtdAutorizadaUm').value == ""){
      this.fusexForm.get('qtdAutorizadaUm').setValue(null);
    }
    if(this.fusexForm.get('codProcedimentoDois').value == ""){
      this.fusexForm.get('codProcedimentoDois').setValue(null);
    }
    if(this.fusexForm.get('qtdSolicitadaDois').value == ""){
      this.fusexForm.get('qtdSolicitadaDois').setValue(null);
    }
    if(this.fusexForm.get('qtdAutorizadaDois').value == ""){
      this.fusexForm.get('qtdAutorizadaDois').setValue(null);
    }
    if(this.fusexForm.get('observacao').value == ""){
      this.fusexForm.get('observacao').setValue(null);
    }
    if(this.fusexForm.get('tipoAtendimento').value == ""){
      this.fusexForm.get('tipoAtendimento').setValue(null);
    }
    if(this.fusexForm.get('tempoAtendimento').value == ""){
      this.fusexForm.get('tempoAtendimento').setValue(null);
    }
    
  }

}
