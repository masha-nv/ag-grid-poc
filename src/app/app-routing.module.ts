import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskTrackerComponent } from './task-tracker/task-tracker-list/task-tracker.component';
import { TodoDetailsComponent } from './todos/todo-details/todo-details.component';
import { TodosGridComponent } from './todos/todos-grid/todos-grid.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'todos',
    component: TodosGridComponent
  },
  {
    path: 'todos/:id',
    component: TodoDetailsComponent
  },
  {
    path: 'task-tracker',
    component: TaskTrackerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
