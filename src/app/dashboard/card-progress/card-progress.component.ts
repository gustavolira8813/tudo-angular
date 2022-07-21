import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tudu-card-progress',
  templateUrl: './card-progress.component.html',
  styleUrls: ['./card-progress.component.css']
})
export class CardProgressComponent implements OnInit {
  @Input() tasks: any
  @Output() open = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  emitOpenEvent() {
    this.open.emit(this.tasks)
  }
}
