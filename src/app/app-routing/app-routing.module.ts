import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { ConvenioFiscoComponent } from '../component/convenio-fisco/convenio-fisco.component';
import { EvolucaoFiscoComponent } from '../component/evolucao-fisco/evolucao-fisco.component';
import { MeuCadastroComponent } from '../component/meu-cadastro/meu-cadastro.component';
import { TelaLoginComponent } from '../component/tela-login/tela-login.component';
import { MeusDadosComponent } from '../component/meus-dados/meus-dados.component';
import { MeuEnderecoComponent } from '../component/meu-endereco/meu-endereco.component';
import { MinhaInfoComponent } from '../component/minha-info/minha-info.component';
import { MeuTissComponent } from '../component/meu-tiss/meu-tiss.component';
import { ConvenioFusexComponent } from '../component/convenio-fusex/convenio-fusex.component';
import { ConvenioGeapComponent } from '../component/convenio-geap/convenio-geap.component';
import { ConvenioPlanAssisteComponent } from '../component/convenio-plan-assiste/convenio-plan-assiste.component';
import { ConvenioTrtSaudeComponent } from '../component/convenio-trt-saude/convenio-trt-saude.component';

const routes: Routes = [

  { path: '', component: TelaLoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'convenio-fisco', component: ConvenioFiscoComponent },
  { path: 'evolucao-fisco', component: EvolucaoFiscoComponent },
  { path: 'convenio-fusex', component: ConvenioFusexComponent },
  { path: 'convenio-geap', component: ConvenioGeapComponent },
  { path: 'convenio-planAssist', component: ConvenioPlanAssisteComponent },
  { path: 'convenio-trt', component: ConvenioTrtSaudeComponent },
  { path: 'meu-cadastro', component: MeuCadastroComponent },
  { path: 'meus-dados', component: MeusDadosComponent},
  { path: 'meus-dados/endereco', component: MeuEnderecoComponent},
  { path: 'meus-dados/info', component: MinhaInfoComponent},
  { path: 'meus-dados/tiss', component: MeuTissComponent}

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
