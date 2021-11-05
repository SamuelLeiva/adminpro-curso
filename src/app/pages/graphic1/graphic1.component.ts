import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphic1',
  templateUrl: './graphic1.component.html',
  styles: [],
})
export class Graphic1Component implements OnInit {
  public labels1: string[] = ['Bread', 'Juice', 'Tacos'];

  public data1 = [[10, 15, 40]];

  constructor() {}

  ngOnInit(): void {}
}
