import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { XyzComponent } from './xyz/xyz.component';
// import { MainComponent } from './main/main.component';
// import { FormComponent } from './form/form.component';
// import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { ChildComponent } from './child/child.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { UserformComponent } from './userform/userform.component';
import { FieldComponent } from './field/field.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { XyzComponent } from './xyz/xyz.component';
// import { MainComponent } from './main/main.component';
import { Observable1Component } from './observable1/observable1.component';
import { Observebale2Component } from './observebale2/observebale2.component';
import { PipeComponent } from './pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleHooksComponent,
    UserformComponent,
    FieldComponent,
    DirectivesComponent,
    ChildComponent,
    XyzComponent,
    // MainComponent,
    Observable1Component,
    Observebale2Component,
    PipeComponent

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
