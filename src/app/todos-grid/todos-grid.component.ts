import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent, ICellRendererParams, RowSelectedEvent } from 'ag-grid-community';
import { ToolPanelComponent } from 'ag-grid-community/dist/lib/components/framework/componentTypes';
import { Observable, tap } from 'rxjs';
import { STATUS } from 'src/types/enum';
import { Todo } from 'src/types/todo';
import { CompletedComponent } from '../completed/completed.component';
import { DeleteIconComponent } from '../delete-icon/delete-icon.component';
import { FlagComponent } from '../flag/flag.component';
import { TitleComponent } from '../title/title.component';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos-grid',
  templateUrl: './todos-grid.component.html',
  styleUrls: ['./todos-grid.component.scss']
})
export class TodosGridComponent implements OnInit {
  rowData$!: Observable<Todo[] | any>;
  components = {
    delete: DeleteIconComponent,
    completed: CompletedComponent,
    title: TitleComponent,
    flag: FlagComponent
  }
  colDefs: ColDef[] = [
    {field: "userId", filter: 'agNumberColumnFilter', sortable: true, resizable: true}, 
    {field: "id", filter: 'agNumberColumnFilter', sortable: true, resizable: true}, 
    {field: "title", cellRenderer: "title", sortable: true, resizable: true}, 
    {field: "completed",
    cellRenderer: "completed", 
    sortable: true, resizable: true,
    
    
    cellRendererParams: (params: ICellRendererParams) => ({completedState: params.value})
  },
    {field: '', headerName: 'Flag', cellRenderer: 'flag', resizable: true, tooltipValueGetter: ()=> 'Categorize'},
    {field: '', 
    cellRenderer: "delete",
    tooltipValueGetter: this.toolTipGetter,
    cellRendererParams: (params: ICellRendererParams) => ({rowIndex: params.rowIndex, numRowsSelected: this.numRowsSelected})
  },
  ];
  numRowsSelected = 0;
  tooltipShowDelay!:number;
  tooltipHideDelay!:number;
  pagination!: boolean;
  paginationPageSize!: number;
  cacheBlockSize!:number;
  rowModelType: 'clientSide' | 'infinite' | 'viewport' | 'serverSide' = 'serverSide';
  cachedTodos!: Array<Todo> | any

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular

  constructor(private todosService: TodosService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.pagination = true;
    this.paginationPageSize = 10;
    this.cacheBlockSize = 10;
  }

  onGridReady(params: GridReadyEvent<Todo[]>) {
    this.rowData$ = this.todosService.getTodos().pipe(
      tap(res => {
        this.cachedTodos = res;
        
      })
    )
  }

  toolTipGetter(){
    return 'double click to delete row'
  }

  onPaginationChange(event: any) {
    const currentPage = this.agGrid.api.paginationGetCurrentPage();
  }

  onCellClicked(event: CellClickedEvent){
    if (event.colDef.field === STATUS.COMPLETED) {
      this.toggleStatus(event);
      return;
    }
    if(event.colDef.field === 'id') {
      this.router.navigateByUrl(`/todos/${event.value}`)
      return;
    }
    // if (event.colDef.field === '')
  }

  toggleStatus(event: CellClickedEvent) {
    const todo = this.cachedTodos.find((todo: Todo) => todo.id === event.data.id);
    todo.completed = !todo.completed
    this.agGrid.api.setRowData(this.cachedTodos)
  }

  clearSelection(){
    this.agGrid.api.deselectAll();
  }

  onRowSelected(event: RowSelectedEvent) {
    this.numRowsSelected = event.api.getSelectedRows().length;
  }

}
