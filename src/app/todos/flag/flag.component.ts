import { Component, OnInit } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";
import { Subject } from "rxjs";
import { Todo } from "src/types/todo";
import { TodosService } from "../todos.service";

@Component({
    selector: 'app-flag',
    templateUrl: './flag.component.html',
    styleUrls: ['./flag.component.scss']
})

export class FlagComponent implements OnInit, ICellRendererAngularComp {
    todoItem!: Todo
    flagSub = new Subject<Todo>();
    categories = ['blue', 'green', 'yellow', 'orange', 'purple', 'red']
    constructor(private todoService: TodosService){}
    agInit(params: ICellRendererParams<any, any>): void {
        this.todoItem = params.data
    }
    refresh(params: ICellRendererParams<any, any>): boolean {
        return false
    }

    ngOnInit(): void {
        
    }

    onCategorySelect(category: string) {
        this.todoItem.flagColor = category;
        this.todoService.flagSub.next(this.todoItem)
    }
}