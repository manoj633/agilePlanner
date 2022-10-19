import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Sprint } from '../model/sprint.model';

@Injectable({
  providedIn: 'root'
})
export class BacklogService {


  tasksChanged = new Subject<Task[]>();
  sprintsChanged = new Subject<Sprint[]>();
  private tasks: Task[] = [];
  private sprints: Sprint[] = [];
  constructor() { }

  getSprints() {

  }

  getTasks() {

  }

  getSprint(id: number) {

  }

  getTask(id: number) {

  }

  setSprints(sprints: Sprint[]) {

  }

  setTasks(tasks: Task[]) {

  }


}
