import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { XyzComponent } from './xyz/xyz.component';
// import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
// import { FormComponent } from './form/form.component';
// import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { ChildComponent } from './child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    // XyzComponent,
    // MainComponent,
    // FormComponent,
    // HttpComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
