import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Subject, tap } from 'rxjs';

@Component({
  selector: 'app-delete-icon',
  templateUrl: './delete-icon.component.html',
  styleUrls: ['./delete-icon.component.scss']
})
export class DeleteIconComponent implements OnInit, ICellRendererAngularComp {
  rowIndex!:number;
  deleteSubj = new Subject()
  constructor() { }

  agInit(params: ICellRendererParams<any, any>): void {
    this.deleteSubj.pipe(tap(() => {
      const selectedRows = params.api.getSelectedRows()
      params.api.applyTransaction({remove: selectedRows})
    }))
    .subscribe()
    
  }
  refresh(params: ICellRendererParams<any, any>): boolean {
    return false
  }

  ngOnInit(): void {
  }

}
