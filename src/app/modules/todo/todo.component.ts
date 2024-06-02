import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  tasks: any = [
    {
      id: 1,
      name: 'Bamboo Watch',
      status: 'Não iniciado',
      startDate: new Date('2023-10-10'),
      endDate: new Date('2024-10-12'),
    },
    {
      id: 2,
      name: 'Bamboo Watch',
      status: 'Pendente',
      startDate: new Date('2021-10-10'),
      endDate: new Date('2021-12-10'),
    },
    {
      id: 3,
      name: 'Bamboo Watch',
      status: 'Não iniciado',
      startDate: new Date('2021-10-10'),
      endDate: new Date('2021-12-10'),
    },
    {
      id: 4,
      name: 'Bamboo Watch',
      status: 'Não iniciado',
      startDate: new Date('2021-10-10'),
      endDate: new Date('2021-10-23'),
    },
    {
      id: 5,
      name: 'Bamboo Watch',
      status: 'Não iniciado',
      startDate: new Date('2021-10-10'),
      endDate: new Date('2021-12-10'),
    },
    {
      id: 6,
      name: 'Bamboo Watch',
      status: 'Não iniciado',
      startDate: new Date('2021-10-10'),
      endDate: new Date('2021-10-14'),
    },
    {
      id: 7,
      name: 'Bamboo Watch',
      status: 'Concluido',
      startDate: new Date('2021-10-10'),
      endDate: new Date('2021-10-15'),
    },
  ];

  notStartedTasks!: any;
  inProgressTasks!: any;
  completedTasks!: any;
  draggedTask: any | null;

  value: any = {
    value: 'table',
    icon: 'pi pi-align-justify',
    justify: 'Right',
  };
  exibirModo: string = 'table';

  justifyOptions: any[] = [
    { value: 'table', icon: 'pi pi-align-justify', justify: 'Right' },
    { value: 'cards', icon: 'pi pi-table', justify: 'Left' },
  ];

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.notStartedTasks = this.tasks.filter(
      (task: any) => task.status === 'Não iniciado'
    );
    this.inProgressTasks = this.tasks.filter(
      (task: any) => task.status === 'Pendente'
    );
    this.completedTasks = this.tasks.filter(
      (task: any) => task.status === 'Concluido'
    );
  }

  onChange(event: any) {
    this.exibirModo = event.value.value;
  }

  calculateDaysLeft(task: any) {
    const endDate = new Date(task.endDate);
    const now = new Date();
    const timeDiff = Math.abs(endDate.getTime() - now.getTime());
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }

  dragStart(task: any) {
    console.log('Drag started', task);
    this.draggedTask = task;
  }

  drop(status: string) {
    if (this.draggedTask) {
      this.removeTaskFromAllLists(this.draggedTask);

      switch (status) {
        case 'notStartedTasks':
          this.notStartedTasks = this.notStartedTasks
          this.notStartedTasks.push(this.draggedTask);
          break;
        case 'inProgressTasks':
          this.inProgressTasks = this.inProgressTasks
          this.inProgressTasks.push(this.draggedTask);
          break;
        case 'completedTasks':
          this.completedTasks = this.completedTasks
          this.completedTasks.push(this.draggedTask);
          break;
      }
    }
  }

  removeTaskFromAllLists(task: any) {
    this.notStartedTasks = this.notStartedTasks || [];
    this.inProgressTasks = this.inProgressTasks || [];
    this.completedTasks = this.completedTasks || [];

    this.notStartedTasks = this.notStartedTasks.filter((t: any) => t.id !== task.id);
    this.inProgressTasks = this.inProgressTasks.filter((t: any) => t.id !== task.id);
    this.completedTasks = this.completedTasks.filter((t: any) => t.id !== task.id);
  }

  dragEnd() {
    this.draggedTask = null;
  }

  confirm2(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Record deleted',
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
        });
      },
    });
  }
}
