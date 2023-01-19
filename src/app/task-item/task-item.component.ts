import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input()
  public task: Task | undefined;

  @Input()
  public index: number | undefined;

  @Output() delete = new EventEmitter<number>();

  public markAsDone() {
    if (!this.task) return;

    this.task.done = !this.task.done;
  }

  public deleteTask() {
    this.delete.emit(this.index);
  }
}
