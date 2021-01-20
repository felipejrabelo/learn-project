import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  loginForm = new FormGroup({
    login: new FormControl(null, Validators.required),
    senha: new FormControl(null, Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

}
