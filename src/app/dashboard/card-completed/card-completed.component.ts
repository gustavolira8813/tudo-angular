import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tudu-card-completed',
  templateUrl: './card-completed.component.html',
  styleUrls: ['./card-completed.component.css']
})
export class CardCompletedComponent implements OnInit {
  @Input() tasks: any
  @Output() open = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }
  emitOpenEvent() {
    this.open.emit(this.tasks)
  }
}
