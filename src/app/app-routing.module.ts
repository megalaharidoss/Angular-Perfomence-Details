import { Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { FieldComponent } from './field/field.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { UserformComponent } from './userform/userform.component';
import { Observebale2Component } from './observebale2/observebale2.component';
import { Observable1Component } from './observable1/observable1.component';
import { LoginComponent } from './login/login.component';
import { PipeComponent } from './pipe/pipe.component';
const routes: Routes = [
  {

    path: '', redirectTo: "login", pathMatch: "full"
  },
  {
    path: "login", component: LoginComponent

  },
  {
    path: "child", component: ChildComponent
  
  },
  {
    path: "field", component: FieldComponent
  },
 
  // {
  //   path: "main", component: MainComponent
  // },
  // {
  //   path:"main",component:MainComponent
  //    },
  { path: "observable1", component: Observable1Component },
  { path: "observable1/observable2", component: Observebale2Component },
  {
    path: "pipe", component: PipeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }