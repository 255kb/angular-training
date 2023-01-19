import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../tasks.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css'],
})
export class TaskAddComponent {
  public form = this.formBuilder.nonNullable.group({
    title: ['New task', [Validators.required]],
    desc: ['', [Validators.required]],
    date: ['', [Validators.required]],
    done: [false],
  });

  constructor(
    private tasksService: TasksService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  public addTask() {
    if (this.form.valid) {
      this.tasksService.addTask(this.form.getRawValue()).subscribe();

      this.router.navigate(['/']);
    }
  }
}
