import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule}  from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { CompletedComponent } from './todos/completed/completed.component';
import { NotcompletedComponent } from './todos/notcompleted/notcompleted.component';
import { TitleComponent } from './todos/title/title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { DeleteIconComponent } from './todos/delete-icon/delete-icon.component';
import { TodosGridComponent } from './todos/todos-grid/todos-grid.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { TodoDetailsComponent } from './todos/todo-details/todo-details.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';
import { OverviewAccordionComponent } from './overview-accordion/overview-accordion.component';
import { HomeComponent } from './home/home.component';
import { FlagComponent } from './todos/flag/flag.component';
import {MatMenuModule} from '@angular/material/menu';
import { UserIdComponent } from './todos/user-id/user-id.component';
import { TaskTrackerComponent } from './task-tracker/task-tracker-grid/task-tracker-grid.component';
import { TaskDetailsComponent } from './task-tracker/task-details/task-details.component';
import { TaskFormDialogComponent } from './task-tracker/task-form-dialog/task-form-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    CompletedComponent,
    NotcompletedComponent,
    TitleComponent,
    DeleteIconComponent,
    TodosGridComponent,
    TodoDetailsComponent,
    OverviewAccordionComponent,
    HomeComponent,
    FlagComponent,
    UserIdComponent,
    TaskTrackerComponent,
    TaskDetailsComponent,
    TaskFormDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatTreeModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
