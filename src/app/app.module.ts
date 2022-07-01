import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { UserformComponent } from './userform/userform.component';
import { FieldComponent } from './field/field.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
=======
import { XyzComponent } from './xyz/xyz.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { Observable1Component } from './observable1/observable1.component';
import { Observebale2Component } from './observebale2/observebale2.component';
import { PipeComponent } from './pipe/pipe.component';
>>>>>>> 8f77f1f55c70bc890f58977371b45c71a2ac9244

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LifeCycleHooksComponent,
    UserformComponent,
    FieldComponent,
    DirectivesComponent
=======
    XyzComponent,
    MainComponent,
    Observable1Component,
    Observebale2Component,
    PipeComponent
>>>>>>> 8f77f1f55c70bc890f58977371b45c71a2ac9244
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule
=======
    FormsModule
>>>>>>> 8f77f1f55c70bc890f58977371b45c71a2ac9244
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
