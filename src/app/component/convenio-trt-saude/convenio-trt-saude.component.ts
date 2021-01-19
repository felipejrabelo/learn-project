import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-convenio-trt-saude',
  templateUrl: './convenio-trt-saude.component.html',
  styleUrls: ['./convenio-trt-saude.component.css']
})
export class ConvenioTrtSaudeComponent implements OnInit {

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

}
