import { Component, OnInit ,DoCheck ,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    console.log("parent ngOnInit");
  }
  ngDoCheck(): void {
    console.log("parent ngDoCheck");
    // Developers custom change detetcion.
  }
   ngAfterViewInit(): void{
    console.log("parent ngAfterViewInit"); 
    // after the views of a component are initialized.
  }
  ngAfterViewChecked(): void{
      console.log("parent ngAfterViewChecked");
    //   // after every check of the views of a component.  
    }

  ngAfterContentInit(): void{
     console.log("parent ngAfterContentInit"); 
  //   // after component content initialized.
 }
  ngAfterContentChecked(): void{
   console.log("parent ngAfterContentChecked"); 
  //   // after every check of component content.
} 
 

}
