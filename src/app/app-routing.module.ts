import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
