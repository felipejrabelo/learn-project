import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meu-cadastro',
  templateUrl: './meu-cadastro.component.html',
  styleUrls: ['./meu-cadastro.component.css']
})
export class MeuCadastroComponent implements OnInit {

  formMeuCadastro = new FormGroup({
    nome: new FormControl(null, Validators.required),
    profissao: new FormControl(null, Validators.required),
    situacao: new FormControl(null, Validators.required),
    sexo: new FormControl(null, Validators.required),
    login: new FormControl(null, Validators.required),
    grupoUsuario: new FormControl(null, Validators.required),
    celular: new FormControl(null, Validators.required),
    telefone: new FormControl(null, Validators.required),
    cic: new FormControl(null, Validators.required),
    dataNascimento: new FormControl(null, Validators.required),
    rg: new FormControl(null, Validators.required),
    matricula: new FormControl(null, Validators.required),
    dataInicio: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required)

  })

  constructor() { }

  ngOnInit(): void {
  }

}
