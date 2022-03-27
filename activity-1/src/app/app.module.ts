import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstnavComponent } from './pages/firstnav/firstnav.component';
import { SecondnavComponent } from './pages/secondnav/secondnav.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstnavComponent,
    SecondnavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
