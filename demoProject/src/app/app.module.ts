import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormatPhoneDirective } from './src/directives/format-phone.directive';


@NgModule({
  declarations: [
    AppComponent,
    FormatPhoneDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
