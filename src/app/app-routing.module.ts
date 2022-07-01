import { Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { DirectivesComponent } from './directives/directives.component';
import { FieldComponent } from './field/field.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { UserformComponent } from './userform/userform.component';

const routes: Routes = [
  {
    path:'',redirectTo:"directive",pathMatch:"full"
  },
  {
    path:"directive",component:DirectivesComponent
  },
  {
    path:"life-cycle-hooks",component:LifeCycleHooksComponent,
  },
  {
    path:"userform",component:UserformComponent,
  },
  {
    path:"field",component:FieldComponent
  },
=======
import { MainComponent } from './main/main.component';
import { Observable1Component } from './observable1/observable1.component';
import { Observebale2Component } from './observebale2/observebale2.component';
import { PipeComponent } from './pipe/pipe.component';

const routes: Routes = [
 {
  path:'',redirectTo:"observable1",pathMatch:"full"
 },
 {
path:"main",component:MainComponent
 },
 {path:"observable1",component:Observable1Component},
 {path:"observable1/observable2",component:Observebale2Component},
 {
  path:"pipe",component:PipeComponent
 }
>>>>>>> 8f77f1f55c70bc890f58977371b45c71a2ac9244
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
