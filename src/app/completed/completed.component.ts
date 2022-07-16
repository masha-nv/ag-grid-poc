import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

export interface CompletedStateParams {
  completedState?: boolean;
}

@Component({
  selector: 'app-completed',
  template: `
    <p [ngClass]='completedState ? "completed" : "not-completed"'>
      {{value}}
    </p>
  `,
  styles: [
    `:host {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    .completed {
      color: green
    };
    .not-completed {
      color: red
    }
    p {
      cursor: pointer
    }
    `
  ]
})
export class CompletedComponent implements OnInit, ICellRendererAngularComp {
  value!: string;
  completedState!:boolean;

  constructor() { }

  agInit(params: ICellRendererParams & CompletedStateParams): void {
    this.value  = params.value;
    this.completedState = params.completedState ?? false;
  }
  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  ngOnInit(): void {
  }

}
