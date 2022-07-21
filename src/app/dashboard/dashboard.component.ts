import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { tasks } from '../tasks';
@Component({
  selector: 'tudu-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tasks = tasks 
  constructor() { }

  ngOnInit(): void {
    
  }
 
}
