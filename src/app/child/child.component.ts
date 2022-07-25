import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  parentName: string='';
  @Output() onNameChange:EventEmitter<string>= new EventEmitter<string>()

  enterName:string='';

  constructor() { }

  ngOnInit(): void {
  }
  onInputChange(event:string): void{
    this.onNameChange.emit(event);

  }
}
