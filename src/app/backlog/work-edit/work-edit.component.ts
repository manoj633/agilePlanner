import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms/forms'

@Component({
  selector: 'app-work-edit',
  templateUrl: './work-edit.component.html',
  styleUrls: ['./work-edit.component.css']
})
export class WorkEditComponent implements OnInit {

  @ViewChild("workForm") workForm!: NgForm;

  work = {
    project: "",
    issue_type: "",
    sprint: "",
    summary: "",
    description: "",
    priority: "",
    story_point: "",
    created_by: "",
    assignee: ""
  }
  constructor() { }

  ngOnInit(): void {
  }

  onCreateWork() {

  }

}
