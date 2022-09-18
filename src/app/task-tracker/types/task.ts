export interface ITask {
    id: number,
    title: string, 
    description: string,
    assignee: string,
}

export interface DialogData {
    id: number,
    title: string,
    description: string,
    assignee: string
  }

export interface ITaskAssignee {
    name: string,
    value: number
}