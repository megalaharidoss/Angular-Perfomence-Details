import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable1',
  templateUrl: './observable1.component.html',
  styleUrls: ['./observable1.component.css']
})
export class Observable1Component implements OnInit {
  destroy!: Subscription
  constructor() { }

  ngOnInit(): void {

    //observable function
    const obs$ = new Observable(obs => {
      console.log("start Observable");
      obs.next("100");
      obs.next("200");
      // obs.error("not working")

      setTimeout(() => {
        obs.next("300");
      }, 1000)
      obs.next("400");
      // obs.complete()
      obs.next("500");
      console.log("end Observable")
    })
    this.destroy = obs$.subscribe(sub => {
      console.log(sub)
    },
      error => {
        console.log('error' + error)
      },
      () => {
        console.log("completed")
      })
    this.destroy.unsubscribe()
  }

}
