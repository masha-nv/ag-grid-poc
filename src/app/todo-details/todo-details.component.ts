import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from 'src/types/todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {
  todoId!:number;
  todoDetails$!: Observable<Todo>;

  constructor(private route: ActivatedRoute, private todosService: TodosService) {
    this.todoId = this.route.snapshot.params['id']
   }

  ngOnInit(): void {
    this.todoDetails$ = this.todosService.getDetails(this.todoId)
  }

}
