import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardInfoComponent } from 'src/app/shared/layout/card-info/card-info.component';
import { DashboardComponent } from './dashboard.component';
import { LineChartComponent } from 'src/app/shared/layout/line-chart/line-chart.component';
import { PieChartComponent } from 'src/app/shared/layout/pie-chart/pie-chart.component';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    CardInfoComponent,
    BadgeModule,
    PieChartComponent,
    LineChartComponent,
    TableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
