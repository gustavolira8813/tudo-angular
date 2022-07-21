import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tudu-card-todo',
  templateUrl: './card-todo.component.html',
  styleUrls: ['./card-todo.component.css']
})
export class CardTodoComponent implements OnInit {
  @Input() tasks: any
  @Output() open = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  emitOpenEvent() {
    this.open.emit(this.tasks)
  }
}
