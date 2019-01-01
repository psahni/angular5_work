import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormatPhoneDirective } from './src/directives/format-phone.directive';
import { CardComponent } from './src/components/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    FormatPhoneDirective,
    CardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
