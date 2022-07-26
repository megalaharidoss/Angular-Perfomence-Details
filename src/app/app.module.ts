import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { UserformComponent } from './userform/userform.component';
import { FieldComponent } from './field/field.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { XyzComponent } from './xyz/xyz.component';
import { MainComponent } from './main/main.component';
import { Observable1Component } from './observable1/observable1.component';
import { Observebale2Component } from './observebale2/observebale2.component';
import { PipeComponent } from './pipe/pipe.component';
import { JwtInterceptor } from './jwt.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleHooksComponent,
    UserformComponent,
    FieldComponent,
    DirectivesComponent,
    LoginComponent,
    XyzComponent,
    MainComponent,
    Observable1Component,
    Observebale2Component,
    PipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
   
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,  useClass: JwtInterceptor, multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
