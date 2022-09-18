import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-title',
  template: `
    <p *ngIf="!isEditing">
      <mat-icon (click)='showValue()'>edit</mat-icon>{{value}}
    </p>
    <input *ngIf="isEditing" type="text" [value]="value" (keydown)="handleSave($event)">
  `,
  styles: [
    `
    :host {
      display: flex;
      align-items: center;
      height: 100%;
    }
    mat-icon {
      font-size: .9rem;
      cursor: pointer
    }
    `
  ]
})
export class TitleComponent implements OnInit, ICellRendererAngularComp {
  value!: string;
  isEditing!: boolean;

  constructor() { }
  agInit(params: ICellRendererParams<any, any>): void {
    this.value = params.value
  }
  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  ngOnInit(): void {
  }

  showValue() {
    this.isEditing = true;
  }

  handleSave(e: KeyboardEvent | any) {
    if (e.which !== 13) return;
    this.value = e.target.value
    this.isEditing = false;
  }

}
