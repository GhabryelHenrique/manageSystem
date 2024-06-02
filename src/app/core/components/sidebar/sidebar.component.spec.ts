/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SidebarComponent } from './sidebar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { CoreComponentsModule } from '../core-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { of } from 'rxjs';

const activatedRouteMock = {
  snapshot: {
    paramMap: {
      get: (key: string) => 'some-id', // Mock the parameter value
    },
  },
  params: of({ id: 'some-id' }), // Mock the observable params
};

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
      providers: [ { provide: ActivatedRoute, useValue: activatedRouteMock },],
      imports: [
        MenubarModule,
        InputIconModule,
        IconFieldModule,
        MenuModule,
        CoreComponentsModule,
        RouterModule,
        BadgeModule,
        AvatarModule,
        BrowserAnimationsModule,
        InputTextModule,
        RippleModule,
        CommonModule,
        FormsModule,
        DropdownModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
