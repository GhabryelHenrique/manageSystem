/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        MenubarModule,
        InputIconModule,
        IconFieldModule,
        MenuModule,
        CoreComponentsModule,
        RouterModule,
        BadgeModule,
        AvatarModule,
        InputTextModule,
        RippleModule,
        CommonModule,
        FormsModule,
        DropdownModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
