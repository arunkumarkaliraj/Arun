import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


@Input() name: string | undefined;


@Output() onNameChange: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }
  
  onInputChange($event:string): void{
        this.onNameChange.emit();
  }
  onValueChange() {
    this.onValueChange();
  }
}
