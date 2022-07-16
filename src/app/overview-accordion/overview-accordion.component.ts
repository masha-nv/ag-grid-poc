import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
interface Node {
  name: string,
  children?: Node[]
}

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

const INSTRUCTIONS_DATA: Node[] = [
  {
    name: 'Ag Grid has the following features:',
    children: [
      {name: 'select rows and display on top how many are selected'},
      {name: 'clear selection'},
      {name: 'edit title when clicking on the pencil icon under title'},
      {name: 'delete row when clicking on the delete icon'},
      {name: 'tooltip under delete icon (enabled browser tooltip and used tooltipValueGetter to show plain text, may take a sec to show up)'},
      {name: 'navigate to the details page when clickin on Id field'},
      {name: 'update completed state when clicking on true/false under Completed column'}
    ]
  }
]
@Component({
  selector: 'app-overview-accordion',
  templateUrl: './overview-accordion.component.html',
  styleUrls: ['./overview-accordion.component.scss']
})
export class OverviewAccordionComponent implements OnInit {
  @Input() state!: string;
  @Input() title!: string;
  @Input() expanded!: boolean;
  
  private _transformer = (node: Node, level: number) => {
    return {
      expandable: !!node.children && node.children.length >  0,
      name: node.name,
      level: level
    }
  }

  panelOpenState!:boolean;
  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(){
    this.dataSource.data = INSTRUCTIONS_DATA;
  }
  ngOnInit(): void {
      
  }
  hasChild = (_: number, node: FlatNode) => node.expandable;

}
