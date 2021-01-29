import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-convenio-trt-saude',
  templateUrl: './convenio-trt-saude.component.html',
  styleUrls: ['./convenio-trt-saude.component.css']
})
export class ConvenioTrtSaudeComponent implements OnInit {

  mostrarEvolucao: boolean = false;

  trtSaudeForm = new FormGroup ({
    cooperado: new FormControl(null, Validators.required),
    paciente: new FormControl(null, Validators.required),
    mesFaturamento: new FormControl(null, Validators.required),
    anoFaturamento: new FormControl(null, Validators.required),
    tipoGuia: new FormControl(null, Validators.required),
    dataHoraLimite: new FormControl(null, Validators.required),
    nGuiaPrestador: new FormControl(null, Validators.required),
    nGuiaPrincipal: new FormControl(null, Validators.required),
    dataAutorizacao: new FormControl(null, Validators.required),
    dataEmissao: new FormControl(null, Validators.required),
    nCarteira: new FormControl(null, Validators.required),
    dataSolicitacao: new FormControl(null, Validators.required),
    tipoAtendimento: new FormControl(null, Validators.required),
    tempoAtendimento: new FormControl(null, Validators.required),
    caraterSolicitacao: new FormControl(null, Validators.required),
    indicacaoAcidente: new FormControl(null, Validators.required),
    tipoSaida: new FormControl(null, Validators.required),
    tipoDoenca: new FormControl(null, Validators.required),
    tempoDoenca: new FormControl(null, Validators.required),      
    codProcedimentoUm: new FormControl(null, Validators.required),
    qtdSolicitadaUm: new FormControl(null, Validators.required),
    qtdAutorizadaUm: new FormControl(null, Validators.required),
    codProcedimentoDois: new FormControl(null, Validators.required),
    qtdSolicitadaDois: new FormControl(null, Validators.required),
    qtdAutorizadaDois: new FormControl(null, Validators.required),
    observacao: new FormControl(null, Validators.required),
    


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
    if(this.trtSaudeForm.get('cooperado').value === ""){
      this.trtSaudeForm.get('cooperado').setValue(null);
    }
    if(this.trtSaudeForm.get('paciente').value === ""){
      this.trtSaudeForm.get('paciente').setValue(null);
    }
    if(this.trtSaudeForm.get('mesFaturamento').value === ''){
      this.trtSaudeForm.get('mesFaturamento').setValue(null);
    }
    if(this.trtSaudeForm.get('anoFaturamento').value == ""){
      this.trtSaudeForm.get('anoFaturamento').setValue(null);
    }
    if(this.trtSaudeForm.get('tipoGuia').value == ""){
      this.trtSaudeForm.get('tipoGuia').setValue(null);
    }
    if(this.trtSaudeForm.get('dataHoraLimite').value == ""){
      this.trtSaudeForm.get('dataHoraLimite').setValue(null);
    }
    if(this.trtSaudeForm.get('nGuiaPrestador').value == ""){
      this.trtSaudeForm.get('nGuiaPrestador').setValue(null);
    }
    if(this.trtSaudeForm.get('nGuiaPrincipal').value == ""){
      this.trtSaudeForm.get('nGuiaPrincipal').setValue(null);
    }
    if(this.trtSaudeForm.get('dataAutorizacao').value == ""){
      this.trtSaudeForm.get('dataAutorizacao').setValue(null);
    }
    if(this.trtSaudeForm.get('dataEmissao').value == ""){
      this.trtSaudeForm.get('dataEmissao').setValue(null);
    }
    if(this.trtSaudeForm.get('nCarteira').value == ""){
      this.trtSaudeForm.get('nCarteira').setValue(null);
    }
    if(this.trtSaudeForm.get('dataSolicitacao').value == ""){
      this.trtSaudeForm.get('dataSolicitacao').setValue(null);
    }
    if(this.trtSaudeForm.get('tipoAtendimento').value == ""){
      this.trtSaudeForm.get('tipoAtendimento').setValue(null);
    }
    if(this.trtSaudeForm.get('caraterSolicitacao').value == ""){
      this.trtSaudeForm.get('caraterSolicitacao').setValue(null);
    }
    if(this.trtSaudeForm.get('indicacaoAcidente').value == ""){
      this.trtSaudeForm.get('indicacaoAcidente').setValue(null);
    }
    if(this.trtSaudeForm.get('tipoSaida').value == ""){
      this.trtSaudeForm.get('tipoSaida').setValue(null);
    }
    if(this.trtSaudeForm.get('tipoDoenca').value == ""){
      this.trtSaudeForm.get('tipoDoenca').setValue(null);
    }
    if(this.trtSaudeForm.get('tempoDoenca').value == ""){
      this.trtSaudeForm.get('tempoDoenca').setValue(null);
    }
    if(this.trtSaudeForm.get('tempoAtendimento').value == ""){
      this.trtSaudeForm.get('tempoAtendimento').setValue(null);
    }
    if(this.trtSaudeForm.get('codProcedimentoUm').value == ""){
      this.trtSaudeForm.get('codProcedimentoUm').setValue(null);
    }
    if(this.trtSaudeForm.get('qtdSolicitadaUm').value == ""){
      this.trtSaudeForm.get('qtdSolicitadaUm').setValue(null);
    }
    if(this.trtSaudeForm.get('qtdAutorizadaUm').value == ""){
      this.trtSaudeForm.get('qtdAutorizadaUm').setValue(null);
    }
    if(this.trtSaudeForm.get('codProcedimentoDois').value == ""){
      this.trtSaudeForm.get('codProcedimentoDois').setValue(null);
    }
    if(this.trtSaudeForm.get('qtdSolicitadaDois').value == ""){
      this.trtSaudeForm.get('qtdSolicitadaDois').setValue(null);
    }
    if(this.trtSaudeForm.get('qtdAutorizadaDois').value == ""){
      this.trtSaudeForm.get('qtdAutorizadaDois').setValue(null);
    }
    if(this.trtSaudeForm.get('observacao').value == ""){
      this.trtSaudeForm.get('observacao').setValue(null); 
    } 
  }
}
