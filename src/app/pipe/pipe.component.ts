import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  animalName: String = "";
    
//  name = 'Angular';
//  day = Date();
//  num = 23543.54;
//  num1 = 555.56;
//  data = {name:'Shrii', age:'25'};
//  arr = [1,3,4,5,6,7,8,9]
  constructor() { }
animals = [
  'lion',
  'tiger',
  'fox',
  'cheetah',
  'rhino'
 ]   
  ngOnInit(): void {
  }
   

}
// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'searchFilter'
// })
// export class SearchFilterPipe implements PipeTransform {

//   transform(value: any, searchText: String): any {
//     if(!value)return [];
//     if(!searchText) return value;    
//     return value.filter((animal:any) => {
//       return animal.toLowerCase().includes(searchText)
//     })
//     return null;
//   }

// }

// <li *ngFor="let animal of animals | searchFilter :animalName">{{animal}}</li>