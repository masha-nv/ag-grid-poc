import { Component, OnInit } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";
import { Observable } from "rxjs";
import { Todo } from "src/types/todo";
import { TodosService } from "../todos.service";

@Component({
    selector: 'app-user-id',
    styleUrls: ['./user-id.component.scss'],
    templateUrl: './user-id.component.html'
})

export class UserIdComponent implements OnInit, ICellRendererAngularComp {
    value!: string;
    categoryColor$!: Observable<string>
    todoItem!: Todo
    constructor(private todoService: TodosService){}

    ngOnInit(): void {
    }
    agInit(params: ICellRendererParams<any, any>): void {
        this.value = params.value;
        this.todoItem = params.data
    }
    refresh(params: ICellRendererParams<any, any>): boolean {
        return false;
    }
    
}