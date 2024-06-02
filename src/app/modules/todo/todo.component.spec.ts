import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TodoComponent } from './todo.component';
import { TodoModule } from './todo.module';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let confirmationService: ConfirmationService;
  let messageService: MessageService;

  const activatedRouteMock = {
    snapshot: {
      paramMap: {
        get: (key: string) => 'some-id', // Mock the parameter value
      },
    },
    params: of({ id: 'some-id' }), // Mock the observable params
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoComponent],
      providers: [
        ConfirmationService,
        MessageService,
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
      imports: [TodoModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    confirmationService = TestBed.inject(ConfirmationService);
    messageService = TestBed.inject(MessageService);
    fixture.detectChanges();
  });

  it('should filter tasks on ngOnInit', () => {
    component.tasks = [
      { id: 1, status: 'Não iniciado' },
      { id: 2, status: 'Pendente' },
      { id: 3, status: 'Concluido' },
    ];
    component.ngOnInit();
    expect(component.notStartedTasks.length).toBe(1);
    expect(component.inProgressTasks.length).toBe(1);
    expect(component.completedTasks.length).toBe(1);
  });

  it('should change exibirModo on onChange', () => {
    const event = { value: { value: 'cards' } };
    component.onChange(event);
    expect(component.exibirModo).toBe('cards');
  });

  it('should calculate days left correctly', () => {
    const task = { endDate: new Date(new Date().getTime() + 86400000) }; // 1 day from now
    const daysLeft = component.calculateDaysLeft(task);
    expect(daysLeft).toBe(1);
  });

  it('should set draggedTask on dragStart', () => {
    const task = { id: 1 };
    component.dragStart(task);
    expect(component.draggedTask).toBe(task);
  });

  it('should drop task into correct list', () => {
    const task = { id: 1, status: 'Não iniciado' };
    component.draggedTask = task;
    component.drop('inProgressTasks');
    expect(component.inProgressTasks).toContain(task);
  });

  it('should drop task into correct list', () => {
    const task = { id: 2, status: 'Pendente' };
    component.draggedTask = task;
    component.drop('notStartedTasks');
    expect(component.notStartedTasks).toContain(task); // Corrigido para verificar a lista correta
  });

  it('should drop task into correct list', () => {
    const task = { id: 2, status: 'Pendente' };
    component.draggedTask = task;
    component.drop('completedTasks');
    expect(component.completedTasks).toContain(task); // Corrigido para verificar a lista correta
  });

  it('should remove task from all lists', () => {
    const task = { id: 1 };
    component.notStartedTasks = [task];
    component.inProgressTasks = [task];
    component.completedTasks = [task];
    component.removeTaskFromAllLists(task);
    expect(component.notStartedTasks.length).toBe(0);
    expect(component.inProgressTasks.length).toBe(0);
    expect(component.completedTasks.length).toBe(0);
  });
  it('should initialize notStartedTasks as an empty array if it is null and add the dragged task', () => {
    const task = { id: 1, status: 'Não iniciado' };
    component.draggedTask = task;
    component.notStartedTasks = null; // Simulate the list being null
    component.drop('notStartedTasks');
    expect(component.notStartedTasks).toEqual([task]);
  });

  it('should initialize inProgressTasks as an empty array if it is null and add the dragged task', () => {
    const task = { id: 1, status: 'Pendente' };
    component.draggedTask = task;
    component.inProgressTasks = null; // Simulate the list being null
    component.drop('inProgressTasks');
    expect(component.inProgressTasks).toEqual([task]);
  });

  it('should initialize completedTasks as an empty array if it is null and add the dragged task', () => {
    const task = { id: 1, status: 'Concluido' };
    component.draggedTask = task;
    component.completedTasks = null; // Simulate the list being null
    component.drop('completedTasks');
    expect(component.completedTasks).toEqual([task]);
  });

  it('should add the dragged task to notStartedTasks if it is already an empty array', () => {
    const task = { id: 1, status: 'Não iniciado' };
    component.draggedTask = task;
    component.notStartedTasks = []; // Simulate the list being an empty array
    component.drop('notStartedTasks');
    expect(component.notStartedTasks).toEqual([task]);
  });

  it('should add the dragged task to inProgressTasks if it is already an empty array', () => {
    const task = { id: 1, status: 'Pendente' };
    component.draggedTask = task;
    component.inProgressTasks = []; // Simulate the list being an empty array
    component.drop('inProgressTasks');
    expect(component.inProgressTasks).toEqual([task]);
  });

  it('should add the dragged task to completedTasks if it is already an empty array', () => {
    const task = { id: 1, status: 'Concluido' };
    component.draggedTask = task;
    component.completedTasks = []; // Simulate the list being an empty array
    component.drop('completedTasks');
    expect(component.completedTasks).toEqual([task]);
  });

  it('should set draggedTask to null on dragEnd', () => {
    component.draggedTask = { id: 1 };
    component.dragEnd();
    expect(component.draggedTask).toBeNull();
  });

  it('should call confirmationService.confirm on confirm2', () => {
    spyOn(confirmationService, 'confirm');
    const event = new Event('click');
    component.confirm2(event);
    expect(confirmationService.confirm).toHaveBeenCalled();
  });

  it('should call messageService.add with correct parameters on accept', () => {
    spyOn(messageService, 'add');
    const confirmSpy = spyOn(confirmationService, 'confirm').and.callThrough();
    const event = new Event('click');
    component.confirm2(event);

    // Simulate the accept action
    const acceptCallback: any = confirmSpy.calls.mostRecent().args[0].accept;
    acceptCallback();

    expect(messageService.add).toHaveBeenCalledWith({
      severity: 'info',
      summary: 'Confirmed',
      detail: 'Record deleted',
    });
  });

  it('should call messageService.add with correct parameters on reject', () => {
    spyOn(messageService, 'add');
    const confirmSpy = spyOn(confirmationService, 'confirm').and.callThrough();
    const event = new Event('click');
    component.confirm2(event);

    // Simulate the reject action
    const rejectCallback: any = confirmSpy.calls.mostRecent().args[0].reject;
    rejectCallback() // Simulate the reject action;

    expect(messageService.add).toHaveBeenCalledWith({
      severity: 'error',
      summary: 'Rejected',
      detail: 'You have rejected',
    });
  });
});
