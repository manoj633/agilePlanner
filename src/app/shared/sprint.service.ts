import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Sprint } from '../model/sprint.model';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  sprintsChanged = new Subject<Sprint[]>();
  private sprints: Sprint[] = [];
  constructor() { }

  getSprints() {
    return this.sprints.slice();
  }

  setSprints(sprintsReceived: Sprint[]) {
    this.sprints = sprintsReceived;
    this.sprintsChanged.next(this.sprints);
  }

  getSprint(id: number) {
    return this.sprints.slice()[id];
  }

  setSprint(sprintReceived: Sprint) {
    this.sprints.push(sprintReceived);
  }

  updateSprint(index: number, newSprint: Sprint) {
    this.sprints[index] = newSprint;
    this.sprintsChanged.next(this.sprints);
  }

  deleteSprint(index: number) {
    this.sprints.slice(index, 1);
    this.sprintsChanged.next(this.sprints)
  }

  changeSprintStatus(id: number, status: string) {
    this.sprints[id].status = status;
  }
}
