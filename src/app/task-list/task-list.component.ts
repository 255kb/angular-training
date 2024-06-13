import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent, NgFor, NgIf, AsyncPipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  taskList!: Observable<Task[]>;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.taskList = this.tasksService.getTasks();
  }

  public deleteTask(taskIndex: number) {
    this.tasksService.deleteTask(taskIndex).subscribe(() => {
      this.taskList = this.tasksService.getTasks();
    });
  }
}
