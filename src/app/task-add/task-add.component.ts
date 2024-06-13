import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css',
})
export class TaskAddComponent {
  form = this.formBuilder.nonNullable.group({
    title: this.formBuilder.nonNullable.control('New Task', [
      Validators.required,
    ]),
    description: this.formBuilder.nonNullable.control('', [
      Validators.required,
    ]),
    date: this.formBuilder.nonNullable.control('', [Validators.required]),
    done: this.formBuilder.nonNullable.control(false),
  });

  constructor(
    private tasksService: TasksService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  addTask() {
    if (this.form.invalid) {
      return;
    }

    this.tasksService.addTask(this.form.getRawValue()).subscribe();

    this.router.navigate(['/']);
  }
}
