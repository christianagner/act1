import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstnavComponent } from './pages/firstnav/firstnav.component';
import { SecondnavComponent } from './pages/secondnav/secondnav.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';


const routes: Routes = [
  {path: "firstnav", component: FirstnavComponent,
    children: [
    {path: "secondnav", component: SecondnavComponent},
    ]
  },
  {path: "**", redirectTo: "firstnav"}
]

@NgModule({
  declarations: [
    AppComponent,
    FirstnavComponent,
    SecondnavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
