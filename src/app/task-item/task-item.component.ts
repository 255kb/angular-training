import { DatePipe, NgFor, NgStyle, TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [NgStyle, TitleCasePipe, DatePipe],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input()
  task!: Task;

  @Input()
  taskIndex!: number;

  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>();

  markAsDone() {
    this.task.done = !this.task.done;
  }

  deleteTask() {
    this.delete.emit(this.taskIndex);
  }
}
