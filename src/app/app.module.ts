import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsEpioneComponent } from './components/forms-epione/forms-epione.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsEpioneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
