import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-lineal',
  templateUrl: './bar-lineal.component.html',
  styleUrls: ['./bar-lineal.component.css'],
})
export class BarLinealComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const speedCanvas = document.getElementById('chart-lineal');

    const speedData = {
      labels: ['25/05/2021', '26/05/2021', '27/05/2021', '28/05/2021'],
      datasets: [
        {
          data: [483, 483, 483, 483],
          label: 'Arroz Elaborado 1',
          fill: false,
          tension: 0.5,
          borderColor: 'black',
        },
        {
          data: [481, 481, 481, 481],
          label: 'Arroz Elaborado 2',
          fill: false,
          tension: 0.5,
          borderColor: 'blue',
        },
        {
          data: [486, 486, 486, 486],
          label: 'Arroz Elaborado 3',
          fill: false,
          tension: 0.5,
          borderColor: 'red',
        },
      ],
    };

    var lineChart = new Chart(speedCanvas as any, {
      type: 'line',
      data: speedData,
    });
  }
}
