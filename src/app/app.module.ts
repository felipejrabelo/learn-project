import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsEpioneComponent } from './components/forms-epione/forms-epione.component';
import { ConvenioFiscoComponent } from './component/convenio-fisco/convenio-fisco.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsEpioneComponent,
    ConvenioFiscoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
