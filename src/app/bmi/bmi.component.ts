import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss'],
})
export class BmiComponent implements OnInit {
  bmi = 0;

  constructor() {}

  ngOnInit(): void {}

  parseInt(str: string): number {
    return parseInt(str);
  }

  calcurate(height: number, weight: number) {
    this.bmi = Math.round((weight / (height / 100) ** 2) * 10) / 10;
  }
}
