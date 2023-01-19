import { Component, OnInit } from '@angular/core';
import { Task } from '../models';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  public taskList$: Observable<Task[]> | null = null;

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.taskList$ = this.tasksService.getTasks();
  }

  public deleteTask(index: number) {
    /* this.tasksService.deleteTask(index).subscribe(() => {
      this.taskList$ = this.tasksService.getTasks();
    }); */
    // OR
    this.taskList$ = this.tasksService
      .deleteTask(index)
      .pipe(switchMap(() => this.tasksService.getTasks()));
  }
}
