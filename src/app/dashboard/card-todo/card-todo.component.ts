import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tudu-card-todo',
  templateUrl: './card-todo.component.html',
  styleUrls: ['./card-todo.component.css']
})
export class CardTodoComponent implements OnInit {
 @Input() tasks:any
  constructor() { }

  ngOnInit(): void {
  }

}
