import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { Observable1Component } from './observable1/observable1.component';
import { Observebale2Component } from './observebale2/observebale2.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    MainComponent,
    Observable1Component,
    Observebale2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
