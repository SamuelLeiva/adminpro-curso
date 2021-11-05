import { Component, Input, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [],
})
export class DoughnutComponent implements OnInit {
  @Input() title: string = 'No title';
  @Input('labels') doughnutChartLabels: Label[] = [
    'Label 1',
    'Label 2',
    'Label 3',
  ];
  @Input('data') doughnutChartData: MultiDataSet = [[350, 450, 100]];

  public colors: Color[] = [
    { backgroundColor: ['#6857e6', '#009fee', '#f02059'] },
  ];

  constructor() {}

  ngOnInit(): void {}
}
