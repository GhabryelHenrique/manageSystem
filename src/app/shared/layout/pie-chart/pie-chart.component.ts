import { Component, OnInit, ElementRef } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  standalone: true,
  imports: []
})
export class PieChartComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.initChart();
  }

  private initChart(): void {
    const chartElement = this.el.nativeElement.querySelector('#pieChart');
    const myChart = echarts.init(chartElement);

    const option = {
      title: {
        text: 'Gráfico de Pizza',
        subtext: 'Dados Exemplo',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        bottom:0,
          left: 'center',
      },
      series: [
        {
          name: 'Acesso à origem',
          type: 'pie',
          radius: '50%',
          selectedMode: 'single',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    myChart.setOption(option);
  }

}
