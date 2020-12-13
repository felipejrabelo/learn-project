import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app/app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { FormsEpioneComponent } from './components/forms-epione/forms-epione.component';
import { ConvenioFiscoComponent } from './component/convenio-fisco/convenio-fisco.component';
import { MenuSuperiorComponent } from './component/menu-superior/menu-superior.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsEpioneComponent,
    ConvenioFiscoComponent,
    MenuSuperiorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
