import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  // usersArr:any=[];
  users=[{name:'hema',age:'10',gender:'f'},{name:'preetha',age:'10',gender:'f'},
  {name:'harini',age:'11',gender:'f'},{name:'jhon',age:'10',gender:'m'},
  {name:'suman',age:'10',gender:'m'},{name:'user',age:'10',}]
  constructor() { }

  ngOnInit(): void {
  }
  
}
