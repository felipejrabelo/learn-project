import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meu-tiss',
  templateUrl: './meu-tiss.component.html',
  styleUrls: ['./meu-tiss.component.css']
})
export class MeuTissComponent implements OnInit {

  formMeuTiss = new FormGroup({
    cbos: new FormControl(null, Validators.required),
    siglaConselho: new FormControl(null, Validators.required),
    nConselho: new FormControl(null, Validators.required),
    ufConselho: new FormControl(null, Validators.required),
    idCooperado: new FormControl(null, Validators.required),
    idEmpresa: new FormControl(null, Validators.required),
    orgaoNome: new FormControl(null, Validators.required),
    orgaoUf: new FormControl(null, Validators.required)

  })

  constructor() { }

  ngOnInit(): void {
  }

}
