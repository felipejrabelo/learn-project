import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meu-endereco',
  templateUrl: './meu-endereco.component.html',
  styleUrls: ['./meu-endereco.component.css']
})
export class MeuEnderecoComponent implements OnInit {

  formMeuEndereco = new FormGroup({
    logradouro: new FormControl(null, Validators.required),
    numero: new FormControl(null, Validators.required),
    complemento: new FormControl(null, Validators.required),
    bairro: new FormControl(null, Validators.required),
    cep: new FormControl(null, Validators.required),
    cidade: new FormControl(null, Validators.required),
    uf: new FormControl(null, Validators.required)

  })

  

  constructor() { }

  ngOnInit(): void {
  }

}
