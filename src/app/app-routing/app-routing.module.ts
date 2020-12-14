import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { ConvenioFiscoComponent } from '../component/convenio-fisco/convenio-fisco.component';
import { EvolucaoFiscoComponent } from '../component/evolucao-fisco/evolucao-fisco.component';
import { MeuCadastroComponent } from '../component/meu-cadastro/meu-cadastro.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'convenio-fisco', component: ConvenioFiscoComponent },
  { path: 'evolucao-fisco', component: EvolucaoFiscoComponent },
  { path: 'meu-cadastro', component: MeuCadastroComponent }
  

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
