import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent, ICellRendererParams, RowClassRules, RowDropZoneParams, RowSelectedEvent } from 'ag-grid-community';
import { concatAll, map, Observable, tap, toArray } from 'rxjs';
import { STATUS } from 'src/types/enum';
import { Todo } from 'src/types/todo';
import { CompletedComponent } from '../completed/completed.component';
import { DeleteIconComponent } from '../delete-icon/delete-icon.component';
import { FlagComponent } from '../flag/flag.component';
import { TitleComponent } from '../title/title.component';
import { TodosService } from '../todos.service';
import { UserIdComponent } from '../user-id/user-id.component';

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
    flag: FlagComponent,
    userId: UserIdComponent
  }
  colDefs: ColDef[] = [
    {field: "userId", cellRenderer: "userId", filter: 'agNumberColumnFilter', rowDrag: true, dndSource: true}, 
    {field: "id", filter: 'agNumberColumnFilter'}, 
    {field: "title", cellRenderer: "title"}, 
    {field: "completed",
    cellRenderer: "completed", 
    cellRendererParams: (params: ICellRendererParams) => ({completedState: params.value})
  },
    {field: '', headerName: 'Flag', cellRenderer: 'flag', tooltipValueGetter: ()=> 'Categorize'},
    {field: '', 
    cellRenderer: "delete",
    tooltipValueGetter: this.toolTipGetter,
    cellRendererParams: (params: ICellRendererParams) => ({rowIndex: params.rowIndex, numRowsSelected: this.numRowsSelected})
  },
  ];

  defaultColDef: ColDef = {
    sortable: true, filter: true, resizable: true, flex: 1
  }
  rowClassRules: RowClassRules = {
    
  }
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
      concatAll(),
      map((todo: object | any) => todo = ({...todo, flagColor: ''})),
      toArray(),
      tap(res => {
        this.cachedTodos = res;
      }),
    )
  }
  onDragOver(event: any) {
    const dragSupported: DataTransfer | null = event.dataTransfer;
    if (dragSupported) {
      event.dataTransfer.dropEffect = 'move';
    }
    event.preventDefault();
  }

  onDrop(event: any) {
    const jsonData = event.dataTransfer.getData('application/json');
    const eJsonRow = document.createElement('div');
    eJsonRow.classList.add('json-row');
    eJsonRow.style.border = '1px solid'
    eJsonRow.innerText = jsonData;
    const eJsonDisplay = document.querySelector('#eJsonDisplay')!;
    eJsonDisplay.appendChild(eJsonRow);
    
    event.preventDefault();
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
