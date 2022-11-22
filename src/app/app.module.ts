import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneComponent } from './phone/phone.component';
import { PhonelistComponent } from './phonelist/phonelist.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    PhonelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
