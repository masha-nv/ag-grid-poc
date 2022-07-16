import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Todo } from 'src/types/todo';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[] | any>{
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }

  getDetails(id: number) : Observable<Todo | any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }
}
