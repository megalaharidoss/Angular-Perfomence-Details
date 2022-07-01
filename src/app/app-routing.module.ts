import { Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
