/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute, Router } from '@angular/router';
import { TodoModule } from '../../todo.module';
import { EditTaskComponent } from './edit-task.component';
import { of } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';

const activatedRouteMock = {
  snapshot: {
    paramMap: {
      get: (key: string) => 'some-id', // Mock the parameter value
    },
  },
  params: of({ id: 'some-id' }), // Mock the observable params
};

describe('EditTaskComponent', () => {
  let component: EditTaskComponent;
  let fixture: ComponentFixture<EditTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        MessageService,
        Router,
        FormBuilder,
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
      declarations: [EditTaskComponent],
      imports: [TodoModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should edit task', () => {
    component.editTask();
    expect(component.editTask).toBeTruthy();
  });
});
