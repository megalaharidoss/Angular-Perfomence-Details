// import { Component, OnInit } from '@angular/core';
// import { HttpService } from '../http.service';
// import { FormGroup } from '@angular/forms';
// import { FormBuilder } from '@angular/forms';
// import { Validators } from '@angular/forms';
// @Component({
//   selector: 'app-http',
//   templateUrl: './http.component.html',
//   styleUrls: ['./http.component.css']
// })
// export class HttpComponent implements OnInit {
//   JobForm!:FormGroup;
//   JobFormSubmitted =false;
//   JobFormsubmit: any = FormGroup;
//   createArr:any=[]

//   constructor(
//     private http:HttpService,
//     private formBuilder:FormBuilder,
//   ) { }

//   ngOnInit(): void {
//     this.JobForm =this.formBuilder.group({
    
//       name:[null,[Validators.required]],
//       mail:[null,[Validators.required]],
//   })
//   }
//   get f(){
//     return this.JobForm.controls
//   }
//   onSubmit(){
//     this.JobFormSubmitted=true;
//     console.log(this.JobForm)
//     if(this.JobForm.invalid){
//       return;
//     }

//     this.http.createData(this.JobForm.value).subscribe(res=>{
//               this.createArr=res.data;
//               console.log(this.createArr)
//           })
//   }
// }
