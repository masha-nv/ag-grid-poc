import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData, ITaskAssignee } from '../types/task';

@Component({
  selector: 'app-task-form-dialog',
  templateUrl: './task-form-dialog.component.html',
  styleUrls: ['./task-form-dialog.component.scss']
})
export class TaskFormDialogComponent implements OnInit {
  form!: FormGroup;
  assignees: ITaskAssignee[] = [
    {
      name: 'Masha',
      value: 1,
    },
    {
      name: 'Olya',
      value: 2,
    },
    {
      name: 'Katya',
      value: 3,
    },
    {
      name: 'Tanya',
      value: 4,
    },

  ]
  constructor(@Inject(MAT_DIALOG_DATA) private data: DialogData , private dialogRef: MatDialogRef<TaskFormDialogComponent>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildTaskForm()
  }

  buildTaskForm() {
    this.form = this.fb.group({
      id: new FormControl({value: Math.floor(Math.random()*100), disabled: true}),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      assignee: new FormControl('', [Validators.required])
    })
  }
  onCancel(){
    this.dialogRef.close()
  }
  onSave(){
    this.dialogRef.close({id: this.form.get('id')?.value,...this.form.value})
  }
}
