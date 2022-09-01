import { Component, OnInit } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";

@Component({
    selector: 'app-flag',
    templateUrl: './flag.component.html',
    styleUrls: ['./flag.component.scss']
})

export class FlagComponent implements OnInit, ICellRendererAngularComp {
    categories = ['blue', 'green', 'yellow', 'orange', 'purple', 'red']
    constructor(){}
    agInit(params: ICellRendererParams<any, any>): void {
        console.log(params)
    }
    refresh(params: ICellRendererParams<any, any>): boolean {
        return false
    }

    ngOnInit(): void {
        
    }

    onCategorySelect(category: string){
        
    }
}