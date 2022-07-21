import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tasks } from 'src/app/tasks';
@Component({
  selector: 'tudu-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: any
  
  taskOpenned:any
  constructor(private route :ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
  const taskIdFromRoute = Number(routeParams.get('taskId'))
    this.taskOpenned = tasks.find(task=>task.id === taskIdFromRoute)
  }

}
