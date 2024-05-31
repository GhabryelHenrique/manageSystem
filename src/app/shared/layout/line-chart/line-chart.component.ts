import { Component, OnInit, ElementRef } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  standalone: true,
  imports: []
})
export class LineChartComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.initChart();
  }

  private initChart(): void {
    const chartElement = this.el.nativeElement.querySelector('#lineChart');
    const myChart = echarts.init(chartElement);

    const option = {
      title: {
        text: 'Gráfico de Linha'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Vendas', 'Clientes', 'Pedidos']
      },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Vendas',
          type: 'line',
          data: [820, 932, 901, 934, 1290, 1330, 1320, 1400, 1500, 1600, 1700, 1800]
        },
        {
          name: 'Clientes',
          type: 'line',
          data: [1454, 914, 825, 1559, 1081, 1050, 1028, 942, 1554, 904, 1492, 1558]
        },
        {
          name: 'Pedidos',
          type: 'line',
          data: [932, 233, 456, 934, 1290, 234, 1111, 1400, 1423, 1600, 1234, 600]
        },
      ]
    };

    myChart.setOption(option);
  }

}
