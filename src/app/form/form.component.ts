// import { Component, OnInit } from '@angular/core';
// import { FormBuilder,FormGroup } from '@angular/forms';
// import { Validators } from '@angular/forms';
// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.css']
// })
// export class FormComponent implements OnInit {
//   JobForm!:FormGroup;
//   JobFormSubmitted =false;
//   JobFormsubmit: any = FormGroup;

//   constructor(
//     private formBuilder:FormBuilder,
//   ) { }

//   ngOnInit(): void {
//     this.JobForm =this.formBuilder.group({
//       fname:['saru'],
//       name:[null,[Validators.required]],
//       mail:[null,[Validators.required]],
//       contact:[null,[Validators.required]],

//   })
//   }
  
// get f(){
//   return this.JobForm.controls
// }
// onSubmit(){
//   this.JobFormSubmitted=true;
//   console.log(this.JobForm)
//   if(this.JobForm.invalid){
//     return;
//   }
// }
// }

