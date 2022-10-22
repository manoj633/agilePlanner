import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SprintService } from './sprint.service';
import { TaskService } from './task.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private taskService: TaskService, private sprintService: SprintService) {
  }

  fetchTasks() {

  }

  storeTasks() {
    const tasks = this.taskService.getTasks();
    this.http.put('link', tasks).subscribe();
  }

  fetchSprints() {

  }

  storeSprints() {
    const sprints = this.sprintService.getSprints();
    this.http.put('link', sprints).subscribe();
  }
}
