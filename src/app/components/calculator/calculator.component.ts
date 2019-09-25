import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  display = 0;
  constructor() { }

  ngOnInit() {
  }

  handleClick(myNumber: number) {
    console.log(myNumber);
    this.display = myNumber;
  }

}
