import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { tasks } from '../data/data';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { TASK_STATUS } from '../types/enums';
import { MatDialog} from '@angular/material/dialog'
import { TaskFormDialogComponent } from '../task-form-dialog/task-form-dialog.component';
import { ITask } from '../types/task';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-task-tracker-grid',
  templateUrl: './task-tracker-grid.component.html',
  styleUrls: ['./task-tracker-grid.component.scss']
})
export class TaskTrackerComponent implements OnInit {
  subscription = new Subscription()
  @ViewChild('grid') grid!: AgGridAngular
  // column definition
  colDefs: ColDef[] = [
    {field: TASK_STATUS.READY_FOR_DEVELOPMENT, cellRenderer: TaskDetailsComponent},
    {field: TASK_STATUS.IN_PROGRESS, cellRenderer: TaskDetailsComponent},
    {field: TASK_STATUS.CODE_REVIEW, cellRenderer: TaskDetailsComponent}, 
    {field: TASK_STATUS.READY_FOR_TESTING, cellRenderer: TaskDetailsComponent}, 
    {field: TASK_STATUS.DONE, cellRenderer: TaskDetailsComponent}, 
  ];

  // row data
  rowData = tasks;

  // default column definition
  defaultColDef = {
    editable: false,
    resizable: true
  }

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onGridReady(params:any) {
    this.grid.api.sizeColumnsToFit()
  }

  addNewTask(){
    this.openDialog()
  }

  openDialog(){
    const dialogRef = this.dialog.open(TaskFormDialogComponent, {
      width: '550px',
    })
   this.subscription.add(dialogRef.afterClosed().subscribe((newTask: ITask) => {
    this.rowData.push(
    {'READY FOR DEVELOPMENT': newTask, 'IN PROGRESS': {} as ITask, 'CODE REVIEW': {} as ITask, 'READY FOR TESTING': {} as ITask, 'DONE': {},}
    )
    this.grid.api.setRowData(this.rowData)
    console.clear()
    console.log(this.rowData)
  }));
    
  }
}
