import { Component, OnInit } from '@angular/core';
import { filter, interval,map,of } from 'rxjs';
import { take } from 'rxjs';

@Component({
  selector: 'app-observebale2',
  templateUrl: './observebale2.component.html',
  styleUrls: ['./observebale2.component.css']
})
export class Observebale2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // const observe$ = interval(1000).pipe(take(5));

    // observe$.subscribe(sub => {
    //   console.log(sub)
    // })
    const of$ = of(1,2,3,4,5,6,7,8,9,0).pipe(filter(f=>f%3==0),map(m=>m*1000));

    of$.subscribe(sub => {
      console.log(sub)
    })
  }

}
