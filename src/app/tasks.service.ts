import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './models';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private httpClient: HttpClient) {}

  public getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>('http://localhost:3000/tasks');
  }

  public addTask(task: Task) {
    return this.httpClient.post('http://localhost:3000/tasks', task);
  }

  public deleteTask(index: number) {
    return this.httpClient.delete(`http://localhost:3000/tasks/${index}`);
  }
}
