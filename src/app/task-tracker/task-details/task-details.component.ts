import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { GroupCellRendererParams, ICellRenderer, ICellRendererParams } from 'ag-grid-community';
import { ITask } from '../types/task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit, ICellRendererAngularComp {
  task!: ITask;
  status!: string
  constructor() { }

  ngOnInit(): void {
  }

  agInit(params: ICellRendererParams<any, any>): void {
    
    this.getTask( params)
  }
  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  getTask(params:ICellRendererParams){
    this.status = params.colDef?.field as string;
    this.task = params.data[this.status]
    console.log(params, this.status, this.task)

  }

}
