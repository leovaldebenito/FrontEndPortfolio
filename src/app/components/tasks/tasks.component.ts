import { TaskService } from './../../service/task.service';
import { Component, Input, OnInit } from '@angular/core';
import {Task} from '../../Task'
import {TASKS} from '../../mock-tasks'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = TASKS;

ngOnInit(): void {
  this.TaskService.getTasks().subscribe((tasks)=>) (this.task = tasks));
}

deleteTask(task: Task) {


}
