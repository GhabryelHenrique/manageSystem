/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TodoModule } from '../../todo.module';
import { CreateTaskComponent } from './create-task.component';

import { of } from 'rxjs';

const activatedRouteMock = {
  snapshot: {
    paramMap: {
      get: (key: string) => 'some-id', // Mock the parameter value
    },
  },
  params: of({ id: 'some-id' }), // Mock the observable params
};

describe('CreateTaskComponent', () => {
  let fixture: ComponentFixture<CreateTaskComponent>;
  let component: CreateTaskComponent;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [CreateTaskComponent],
      providers: [
        MessageService,
        Router,
        FormBuilder,
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
      imports: [TodoModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create Task', () => {
    component.createTask();
    expect(component.createTask).toBeTruthy();
  });



});
