import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-minha-info',
  templateUrl: './minha-info.component.html',
  styleUrls: ['./minha-info.component.css']
})
export class MinhaInfoComponent implements OnInit {

  formMinhaInfo = new FormGroup({
    inss: new FormControl(null, Validators.required),
    cim: new FormControl(null, Validators.required),
    dataCadastro: new FormControl(null, Validators.required),
    dataFalecimento: new FormControl(null, Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

}
