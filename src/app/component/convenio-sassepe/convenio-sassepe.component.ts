import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-convenio-sassepe',
  templateUrl: './convenio-sassepe.component.html',
  styleUrls: ['./convenio-sassepe.component.css']
})
export class ConvenioSassepeComponent implements OnInit {

  mostrarEvolucao: boolean = false;
  
  sassepeForm = new FormGroup ({
    convenio: new FormControl('SASSEPE', Validators.required),
    cooperado: new FormControl('ADILMA FABIANE GOMES PEREIRA WILLMERSDORF', Validators.required),
    codProcedimentoUm: new FormControl(null, Validators.required),
    qtdSolicitadaUm: new FormControl(null, Validators.required),
    qtdAutorizadaUm: new FormControl(null, Validators.required),
    codProcedimentoDois: new FormControl(null, Validators.required),
    qtdSolicitadaDois: new FormControl(null, Validators.required),
    qtdAutorizadaDois: new FormControl(null, Validators.required),
    registroANS: new FormControl(101010, Validators.required),
    nGuiaPrestador: new FormControl(null, Validators.required),
    paciente: new FormControl(null, Validators.required),
    dataAutorizacao: new FormControl(null, Validators.required),
    senhaGuia: new FormControl(null, Validators.required),
    validadeSenha: new FormControl(null, Validators.required),
    dataEmissao: new FormControl(null, Validators.required),
    nCarteira: new FormControl(null, Validators.required),
    validadeCarteira: new FormControl(null, Validators.required),
    codOperador: new FormControl(1220, Validators.required),
    nomeContratado: new FormControl('HSE-HOSPITAL DOS SERVIDORES DO ESTADO', Validators.required),
    codCNES: new FormControl(null, Validators.required),
    nomeProfissionalSolicitante: new FormControl(null, Validators.required),
    nConselho: new FormControl(8140, Validators.required),
    uf: new FormControl('PE', Validators.required),
    codCBOS: new FormControl(225125, Validators.required),
    conselhoProfissional: new FormControl('CRM', Validators.required),
    dataHoraSolicitacao: new FormControl(null, Validators.required),
    caraterSolicitacao: new FormControl('E', Validators.required),
    indicacaoClinica: new FormControl('FISIO/FONO', Validators.required),
    codNaOperadora: new FormControl(6106171000186, Validators.required),
    cid: new FormControl('I64', Validators.required),
    nomeContratadoDois: new FormControl('COOPFISIO COOPERATIVA DOS FISIOTERAPEUTAS E TERAPEUTAS ...', Validators.required),
    codCNESDois: new FormControl(5683718, Validators.required),
    codOperadoraComplementar: new FormControl(70495025453, Validators.required),
    nomeProfissionalExecutante: new FormControl(null, Validators.required),
    conselhoProfissionalComplementar: new FormControl('CREFITO', Validators.required),
    nConselhoProfissional: new FormControl(26882, Validators.required),
    ufProfissional: new FormControl('PE', Validators.required),
    codCBOSProfissional: new FormControl(223605, Validators.required),
    tipoAgendamento: new FormControl('06', Validators.required),
    tipoSaida: new FormControl(2, Validators.required)


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

  onSubmit(){
    this.checkCampos();
    console.log(this.sassepeForm.value);
  }

  checkCampos(){
    if(this.sassepeForm.get('cooperado').value === ""){
      this.sassepeForm.get('cooperado').setValue(null);
    }
    if(this.sassepeForm.get('codProcedimentoUm').value === ""){
      this.sassepeForm.get('codProcedimentoUm').setValue(null);
    }

    if(this.sassepeForm.get('qtdSolicitadaUm').value === ''){
      console.log(this.sassepeForm.get('qtdSolicitadaUm').value);
      this.sassepeForm.get('qtdSolicitadaUm').setValue(null);
    }
 
    if(this.sassepeForm.get('qtdAutorizadaUm').value == ""){
      this.sassepeForm.get('qtdAutorizadaUm').setValue(null);
    }
    if(this.sassepeForm.get('codProcedimentoDois').value == ""){
      this.sassepeForm.get('codProcedimentoDois').setValue(null);
    }
    if(this.sassepeForm.get('qtdSolicitadaDois').value == ""){
      this.sassepeForm.get('qtdSolicitadaDois').setValue(null);
    }
    if(this.sassepeForm.get('qtdAutorizadaDois').value == ""){
      this.sassepeForm.get('qtdAutorizadaDois').setValue(null);
    }
    if(this.sassepeForm.get('registroANS').value == ""){
      this.sassepeForm.get('registroANS').setValue(null);
    }
    if(this.sassepeForm.get('nGuiaPrestador').value == ""){
      this.sassepeForm.get('nGuiaPrestador').setValue(null);
    }
    if(this.sassepeForm.get('paciente').value == ""){
      this.sassepeForm.get('paciente').setValue(null);
    }
    if(this.sassepeForm.get('dataAutorizacao').value == ""){
      this.sassepeForm.get('dataAutorizacao').setValue(null);
    }
    if(this.sassepeForm.get('senhaGuia').value == ""){
      this.sassepeForm.get('senhaGuia').setValue(null);
    }
    if(this.sassepeForm.get('validadeSenha').value == ""){
      this.sassepeForm.get('validadeSenha').setValue(null);
    }
    if(this.sassepeForm.get('dataEmissao').value == ""){
      this.sassepeForm.get('dataEmissao').setValue(null);
    }
    if(this.sassepeForm.get('nCarteira').value == ""){
      this.sassepeForm.get('nCarteira').setValue(null);
    }
    if(this.sassepeForm.get('validadeCarteira').value == ""){
      this.sassepeForm.get('validadeCarteira').setValue(null);
    }
    if(this.sassepeForm.get('codOperador').value == ""){
      this.sassepeForm.get('codOperador').setValue(null);
    }
    if(this.sassepeForm.get('nomeContratado').value == ""){
      this.sassepeForm.get('nomeContratado').setValue(null);
    }
    if(this.sassepeForm.get('codCNES').value == ""){
      this.sassepeForm.get('codCNES').setValue(null);
    }
    if(this.sassepeForm.get('nomeProfissionalSolicitante').value == ""){
      this.sassepeForm.get('nomeProfissionalSolicitante').setValue(null);
    }
    if(this.sassepeForm.get('nConselho').value == ""){
      this.sassepeForm.get('nConselho').setValue(null);
    }
    if(this.sassepeForm.get('uf').value == ""){
      this.sassepeForm.get('uf').setValue(null);
    }
    if(this.sassepeForm.get('codCBOS').value == ""){
      this.sassepeForm.get('codCBOS').setValue(null);
    }
    if(this.sassepeForm.get('conselhoProfissional').value == ""){
      this.sassepeForm.get('conselhoProfissional').setValue(null);
    }
    if(this.sassepeForm.get('dataHoraSolicitacao').value == ""){
      this.sassepeForm.get('dataHoraSolicitacao').setValue(null);
    }
    if(this.sassepeForm.get('caraterSolicitacao').value == ""){
      this.sassepeForm.get('caraterSolicitacao').setValue(null);
    }
    if(this.sassepeForm.get('indicacaoClinica').value == ""){
      this.sassepeForm.get('indicacaoClinica').setValue(null);
    }
    if(this.sassepeForm.get('codNaOperadora').value == ""){
      this.sassepeForm.get('codNaOperadora').setValue(null);
    }
    if(this.sassepeForm.get('cid').value == ""){
      this.sassepeForm.get('cid').setValue(null);
    }
    if(this.sassepeForm.get('nomeContratadoDois').value == ""){
      this.sassepeForm.get('nomeContratadoDois').setValue(null);
    }
    if(this.sassepeForm.get('codCNESDois').value == ""){
      this.sassepeForm.get('codCNESDois').setValue(null);
    }
    if(this.sassepeForm.get('codOperadoraComplementar').value == ""){
      this.sassepeForm.get('codOperadoraComplementar').setValue(null);
    }
    if(this.sassepeForm.get('nConselhoProfissional').value == ""){
      this.sassepeForm.get('nConselhoProfissional').setValue(null);
    }
    if(this.sassepeForm.get('ufProfissional').value == ""){
      this.sassepeForm.get('ufProfissional').setValue(null);
    }
    if(this.sassepeForm.get('codCBOSProfissional').value == ""){
      this.sassepeForm.get('codCBOSProfissional').setValue(null);
    }
    if(this.sassepeForm.get('tipoAgendamento').value == ""){
      this.sassepeForm.get('tipoAgendamento').setValue(null);
    }
    if(this.sassepeForm.get('tipoSaida').value == ""){
      this.sassepeForm.get('tipoSaida').setValue(null);
    }
  }
}
