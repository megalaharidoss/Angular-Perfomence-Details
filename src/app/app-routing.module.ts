import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { AppComponent } from './app.component';
const routes: Routes = [
 {
  path:'',redirectTo:"child",pathMatch:"full"
 },

{
    path:"child",component:ChildComponent
  },
  {
    path:"app",component:AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
