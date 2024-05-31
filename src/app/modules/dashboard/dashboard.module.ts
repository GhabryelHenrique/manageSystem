import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CardInfoComponent } from 'src/app/shared/layout/card-info/card-info.component';
import { DashboardComponent } from './dashboard.component';
import { LineChartComponent } from 'src/app/shared/layout/line-chart/line-chart.component';
import { PieChartComponent } from 'src/app/shared/layout/pie-chart/pie-chart.component';

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
    PieChartComponent,
    LineChartComponent,
    AvatarGroupModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
