import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app/app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { FormsEpioneComponent } from './components/forms-epione/forms-epione.component';
import { ConvenioFiscoComponent } from './component/convenio-fisco/convenio-fisco.component';
import { MenuSuperiorComponent } from './component/menu-superior/menu-superior.component';
import { HomeComponent } from './component/home/home.component';
import { EvolucaoFiscoComponent } from './component/evolucao-fisco/evolucao-fisco.component';
import { MeuCadastroComponent } from './component/meu-cadastro/meu-cadastro.component';
import { ConvenioPlanAssisteComponent } from './component/convenio-plan-assiste/convenio-plan-assiste.component';
import { ConvenioGeapComponent } from './component/convenio-geap/convenio-geap.component';
import { ConvenioFusexComponent } from './component/convenio-fusex/convenio-fusex.component';
import { ConvenioTrtSaudeComponent } from './component/convenio-trt-saude/convenio-trt-saude.component';
import { TelaLoginComponent } from './component/tela-login/tela-login.component';
import { NavbarHomeComponent } from './component/navbar-home/navbar-home.component';
import { MeusDadosComponent } from './component/meus-dados/meus-dados.component';
import { MeuEnderecoComponent } from './component/meu-endereco/meu-endereco.component';
import { MinhaInfoComponent } from './component/minha-info/minha-info.component';
import { MeuTissComponent } from './component/meu-tiss/meu-tiss.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelecaoConvenioComponent } from './component/selecao-convenio/selecao-convenio.component';
import { ConvenioSassepeComponent } from './component/convenio-sassepe/convenio-sassepe.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsEpioneComponent,
    ConvenioFiscoComponent,
    MenuSuperiorComponent,
    HomeComponent,
    EvolucaoFiscoComponent,
    MeuCadastroComponent,
    ConvenioPlanAssisteComponent,
    ConvenioGeapComponent,
    ConvenioFusexComponent,
    ConvenioTrtSaudeComponent,
    TelaLoginComponent,
    NavbarHomeComponent,
    MeusDadosComponent,
    MeuEnderecoComponent,
    MinhaInfoComponent,
    MeuTissComponent,
    SelecaoConvenioComponent,
    ConvenioSassepeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
