import { Component, OnInit } from '@angular/core';
import { CardInformation } from './models/cardInformation.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  totalClients = 12344;
  totalPercent = -50;

  products: any = [
    {
      id: 1000,
      name: 'Bamboo Watch',
      status: 'Concluido',
    },
    {
      id: 1,
      name: 'Bamboo Watch',
      status: 'Pendente',
    },
    {
      id: 2,
      name: 'Bamboo Watch',
      status: 'Não iniciado',
    },
    {
      id: 2,
      name: 'Bamboo Watch',
      status: 'Não iniciado',
    },
    {
      id: 2,
      name: 'Bamboo Watch',
      status: 'Não iniciado',
    },
    {
      id: 2,
      name: 'Bamboo Watch',
      status: 'Não iniciado',
    },
    {
      id: 1000,
      name: 'Bamboo Watch',
      status: 'Concluido',
    },
  ];

  cardsInformations: CardInformation[] = [
    {
      title: 'Total de Clientes',
      value: 40689,
      percent: 8.5,
      icon: 'group',
      avatarStyle: {
        'background-color': 'rgba(130, 128, 255, .5)',
        color: 'rgba(130, 128, 255, 1)',
      },
    },
    {
      title: 'Total de Pedidos',
      value: 10293,
      percent: 1.3,
      icon: 'package_2',
      avatarStyle: {
        'background-color': 'rgba(254, 197, 61, .5)',
        color: 'rgba(254, 197, 61, 1)',
      },
    },
    {
      title: 'Total de Vendas',
      value: 89000,
      percent: 4.3,
      icon: 'monitoring',
      avatarStyle: {
        'background-color': 'rgba(74, 217, 145, .5)',
        color: 'rgba(74, 217, 145, 1)',
      },
    },
    {
      title: 'Total Pendentes',
      value: 2040,
      percent: 1.8,
      icon: 'history',
      avatarStyle: {
        'background-color': 'rgba(255, 144, 102, .5)',
        color: 'rgba(255, 144, 102, 1)',
      },
    },
  ];
  constructor() {}

  ngOnInit() {}
}
