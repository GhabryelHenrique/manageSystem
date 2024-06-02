import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { Routes, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {BadgeModule} from 'primeng/badge';
import {RippleModule} from 'primeng/ripple';
import { DragDropModule } from 'primeng/dragdrop';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent
  },
  {
    path: 'create',
    component: CreateTaskComponent
  },
  {
    path: 'edit/:id',
    component: EditTaskComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    ToastModule,
    CalendarModule,
    SelectButtonModule,
    TableModule,
    InputTextareaModule,
    RippleModule,
    BadgeModule,
    DragDropModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TodoComponent, CreateTaskComponent, EditTaskComponent],
  providers: [MessageService,ConfirmationService],
})
export class TodoModule { }
