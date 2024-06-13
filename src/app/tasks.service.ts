import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './models';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private httpClient: HttpClient) {}

  public getTasks() {
    return this.httpClient.get<Task[]>('http://localhost:3000/tasks');
  }

  public addTask(task: Task) {
    return this.httpClient.post('http://localhost:3000/tasks', task);
  }

  public deleteTask(taskIndex: number) {
    return this.httpClient.delete(`http://localhost:3000/tasks/${taskIndex}`);
  }
}
