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
import { SelecaoConvenioComponent } from '../component/selecao-convenio/selecao-convenio.component';
import { ConvenioSassepeComponent } from '../component/convenio-sassepe/convenio-sassepe.component';

const routes: Routes = [

  { path: '', component: TelaLoginComponent },
  
  { path: 'home', component: HomeComponent},
  { path: 'selecao-convenio', component: SelecaoConvenioComponent },
  { path: 'convenio-fisco', component: ConvenioFiscoComponent },
  
  { path: 'convenio-fusex', component: ConvenioFusexComponent },
  { path: 'convenio-geap', component: ConvenioGeapComponent },
  { path: 'convenio-planAssist', component: ConvenioPlanAssisteComponent },
  { path: 'convenio-trt', component: ConvenioTrtSaudeComponent },
  { path: 'convenio-sassepe', component: ConvenioSassepeComponent },
  { path: 'meu-cadastro', component: MeuCadastroComponent },
  { path: 'meus-dados', component: MeusDadosComponent},
  { path: 'meu-cadastro/endereco', component: MeuEnderecoComponent},
  { path: 'meu-cadastro/info', component: MinhaInfoComponent},
  { path: 'meu-cadastro/tiss', component: MeuTissComponent}

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
