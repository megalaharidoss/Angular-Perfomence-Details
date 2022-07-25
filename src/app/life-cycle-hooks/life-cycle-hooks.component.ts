import { Component,OnInit,DoCheck} from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnInit,DoCheck {
  search:any={}
  constructor() {
    console.log("Constructor");
   }
  ngOnChanges(): void {
    console.log("NgOnChanges");
    // when an input or output binding value changes.
  }
  ngOnInit(): void {
    console.log("NgOnInit"); 
    // after the first ngOnChanges.
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
    // Developers custom change detetcion.
  }
  ngAfterContentInit(): void{
    console.log("ngAfterContentInit"); 
    // after component content initialized.
  }
  ngAfterContentChecked(): void{
    console.log("ngAfterContentChecked"); 
    // after every check of component content.
  } 
  ngAfterViewInit(): void{
    console.log("ngAfterContentInit"); 
    // after the views of a component are initialized.
  }
  ngAfterViewChecked(): void{
    console.log("ngAfterContentChecked");
    // after every check of the views of a component.
  }
  ngOnDestroy(): void{
    console.log("ngOnDestroy");
    // just before the directive is destroyed.
  }
}
