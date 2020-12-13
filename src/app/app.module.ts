import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsEpioneComponent } from './components/forms-epione/forms-epione.component';
import { ConvenioFiscoComponent } from './component/convenio-fisco/convenio-fisco.component';
import { MenuSuperiorComponent } from './component/menu-superior/menu-superior.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsEpioneComponent,
    ConvenioFiscoComponent,
    MenuSuperiorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
