import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { HeaderComponent } from './header/header.component';
import { MenuModule } from 'primeng/menu';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent],
  imports: [
    CommonModule,
    MenubarModule,
    InputIconModule,
    IconFieldModule,
    MenuModule,
    RouterModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    RippleModule,
    CommonModule,
    FormsModule,
    DropdownModule,
  ],
  exports: [SidebarComponent, HeaderComponent]
})
export class CoreComponentsModule { }
