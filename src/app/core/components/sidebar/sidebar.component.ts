import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  items: MenuItem[] | undefined;

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-home',
            route: '/dashboard',
          },
          {
            label: 'Produtos',
            icon: 'pi pi-table',
            route: '/produtos',
          },
          {
            label: 'Favoritos',
            icon: 'pi pi-heart',
          },
          {
            label: 'Vendas',
            icon: 'pi pi-list-check',
          },

        ],
      },
      {
        separator: true,
      },
      {
        items: [
          {
            label: 'Agenda',
            icon: 'pi pi-calendar',
          },
          {
            label: 'A fazer',
            icon: 'pi pi-file',
          },
          {
            label: 'Dispesas',
            icon: 'pi pi-money-bill',
          },
        ],
      },
      {
        separator: true,
      },
      {
        items: [
          {
            label: 'Configurações',
            icon: 'pi pi-cog',
          },
          {
            label: 'Logout',
            icon: 'pi pi-power-off',
          },
        ],
      },
    ];
  }

}
