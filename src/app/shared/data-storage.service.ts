import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskService } from './task.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private taskService: TaskService) {
  }

  fetchTasks() {

  }

  storeTasks() {
    const tasks = this.taskService.getTasks();
    this.http.put(' link', tasks).subscribe();
  }

  fetchSprints() {

  }

  storeSprints() {

  }
}
