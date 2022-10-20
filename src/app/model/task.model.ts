export interface Task {

    task_id: number;
    project: string;
    summary: string;
    description: string;
    priority: string;
    scoped_sprint: string;
    story_points: number;
    created_by: string;
    assignee: string;

}