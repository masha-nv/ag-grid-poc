import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule}  from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { CompletedComponent } from './completed/completed.component';
import { NotcompletedComponent } from './notcompleted/notcompleted.component';
import { TitleComponent } from './title/title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { DeleteIconComponent } from './delete-icon/delete-icon.component';
import { TodosGridComponent } from './todos-grid/todos-grid.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';
import { OverviewAccordionComponent } from './overview-accordion/overview-accordion.component';
import { HomeComponent } from './home/home.component';
import { FlagComponent } from './flag/flag.component';
import {MatMenuModule} from '@angular/material/menu';

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
    FlagComponent
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
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
