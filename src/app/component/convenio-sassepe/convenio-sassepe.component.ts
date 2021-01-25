import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-convenio-sassepe',
  templateUrl: './convenio-sassepe.component.html',
  styleUrls: ['./convenio-sassepe.component.css']
})
export class ConvenioSassepeComponent implements OnInit {
  
  sassepeForm = new FormGroup ({
    cooperado: new FormControl(null, Validators.required),
    codProcedimentoUm: new FormControl(null, Validators.required),
    qtdSolicitadaUm: new FormControl(null, Validators.required),
    qtdAutorizadaUm: new FormControl(null, Validators.required),
    codProcedimentoDois: new FormControl(null, Validators.required),
    qtdSolicitadaDois: new FormControl(null, Validators.required),
    qtdAutorizadaDois: new FormControl(null, Validators.required),
    registroANS: new FormControl(null, Validators.required),
    nGuiaPrestador: new FormControl(null, Validators.required),
    paciente: new FormControl(null, Validators.required),
    dataAutorizacao: new FormControl(null, Validators.required),
    senhaGuia: new FormControl(null, Validators.required),
    validadeSenha: new FormControl(null, Validators.required),
    dataEmissao: new FormControl(null, Validators.required),
    nCarteira: new FormControl(null, Validators.required),
    validadeCarteira: new FormControl(null, Validators.required),
    codOperador: new FormControl(null, Validators.required),
    nomeContratado: new FormControl(null, Validators.required),
    codCNES: new FormControl(null, Validators.required),
    nomeProfissionalSolicitante: new FormControl(null, Validators.required),
    nConselho: new FormControl(null, Validators.required),
    uf: new FormControl(null, Validators.required),
    codCBOS: new FormControl(null, Validators.required),
    conselhoProfissional: new FormControl(null, Validators.required),
    dataHoraSolicitacao: new FormControl(null, Validators.required),
    caraterSolicitacao: new FormControl(null, Validators.required),
    indicacaoClinica: new FormControl(null, Validators.required),
    cid: new FormControl(null, Validators.required),
    nomeContratadoDois: new FormControl(null, Validators.required),
    codCNESDois: new FormControl(null, Validators.required),
    codOperadoraComplementar: new FormControl(null, Validators.required),
    nomeProfissionalExecutante: new FormControl(null, Validators.required),
    conselhoProfissionalComplementar: new FormControl(null, Validators.required),
    nConselhoProfissional: new FormControl(null, Validators.required),
    ufProfissional: new FormControl(null, Validators.required),
    codCBOSProfissional: new FormControl(null, Validators.required),
    tipoAgendamento: new FormControl(null, Validators.required),
    tipoSaida: new FormControl(null, Validators.required)


  })

  constructor() { }

  ngOnInit(): void {
  }

}
