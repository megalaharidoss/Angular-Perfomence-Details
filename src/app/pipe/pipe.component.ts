import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
 name = 'Angular';
 day = Date();
 num = 23543.54;
 num1 = 555.56;
 obj = {name:'Shrii', age:'25'};
 arr = [1,3,4,5,6,7]
  constructor() { }

  ngOnInit(): void {
  }

}
// <div>
//     Number: {{number | number:'6.4-4'}}
// </div>

// <div>
//     Percentage: {{num1 | percent:'0.0-0'}}
// </div>

// <div>
//     Currency: {{number | currency:'CAD':''}}
// </div>

// <div>
//     Upper Case:{{'AnGUlaR' | uppercase}}
// </div>

// <div>
//     Lower Case:{{'anGULAr' | lowercase}}
// </div>

// <div>
//     Title Case: {{'sabiTHA kANNan' | titlecase}}
// </div>

// <div>
//     Json: {{arr}}
// </div>
// <div>
//     Json: {{obj | json}}
// </div>

// <div>
//     Slice: {{arr | slice: 2:3}}
// </div>

// <div>
//     Key value pair: {{obj | keyvalue}}
// </div>

// <div>
//     Json: {{num1 | decimal}}
// </div>