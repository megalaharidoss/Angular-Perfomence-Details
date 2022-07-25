import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  name: string='';
  childName: string='';
  

  onChildNameChange(event:string):void{
    this.childName=event
  }

  //title = 'demo';
  //showLifeCycle:boolean=false;
  ///value: string = 'angular';
  constructor(private router:Router){

  }
  // onShoworHide(): void{
  //   this.showLifeCycle = !this.showLifeCycle
  // }
}
