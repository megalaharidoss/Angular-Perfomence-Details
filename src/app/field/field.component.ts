import { Component, OnInit, DoCheck,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit{
  //value:any={}
  
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
//   ngOnInit(): void {
//     console.log("Child ngOnInit");
//   }
//   ngDoCheck(): void {
//     console.log("Child ngDoCheck");
//     // Developers custom change detetcion.
//   }
//   ngAfterViewInit(): void{
//     console.log("Child ngAfterViewInit"); 
//     // after the views of a component are initialized.
//   }
//   ngAfterViewChecked(): void{
//      console.log("Child ngAfterContentChecked");
//     //   // after every check of the views of a component.
//      }
//   ngAfterContentInit(): void{
//    console.log("Child ngAfterContentInit"); 
//   //   // after component content initialized.
//  }
//   ngAfterContentChecked(): void{
//     console.log("Child ngAfterContentChecked"); 
//   //   // after every check of component content.
//   } 

  

