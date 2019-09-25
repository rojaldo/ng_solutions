import { Component, OnInit } from '@angular/core';

enum State { InitState, FirstFigureState, SecondFigureState, ResultState };

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  display = '';
  currentState = State.InitState;

  firstFigure = 0;
  secondFigure = 0;
  result = 0;
  operator = '';

  constructor() { }

  ngOnInit() {
  }

  handleNumber(myNumber: number) {
    switch (this.currentState) {
      case State.InitState:
        this.firstFigure = myNumber;
        this.display += myNumber;
        this.currentState = State.FirstFigureState;
        break;
      case State.FirstFigureState:
        this.firstFigure = this.firstFigure * 10 + myNumber;
        this.display += myNumber;
        break;
      case State.SecondFigureState:
        this.secondFigure = this.secondFigure * 10 + myNumber;
        this.display += myNumber;
        break;
      case State.ResultState:
        this.firstFigure = myNumber;
        this.secondFigure = 0;
        this.operator = '';
        this.result = 0;
        this.display = String(myNumber);
        this.currentState = State.FirstFigureState;
        break;
      default:
        break;
    }
  }
  handleSymbol(symbol: string) {
    switch (this.currentState) {
      case State.InitState:
        break;
      case State.FirstFigureState:
        if (this.isOperator(symbol)) {
          this.operator = symbol;
          this.display += symbol;
          this.currentState = State.SecondFigureState;
        }
        break;
      case State.SecondFigureState:
        if (symbol === '=') {
          this.result = this.resolve();
          this.display = this.display + '=' + this.result;
          this.currentState = State.ResultState;
        }
        break;
      case State.ResultState:
        if(this.isOperator(symbol)){
          this.firstFigure = this.result;
          this.secondFigure = 0;
          this.operator = symbol;
          this.result = 0;
          this.display = this.firstFigure + symbol;
          this.currentState = State.SecondFigureState;
        }
        break;
      default:
        break;
    }

  }

  resolve(): number {
    switch (this.operator) {
      case '+':
        return this.firstFigure + this.secondFigure;
      case '-':
        return this.firstFigure - this.secondFigure;
      case '*':
        return this.firstFigure * this.secondFigure;
      case '/':
        return this.firstFigure / this.secondFigure;
      default:
        break;
    }
  }

  isOperator(symbol: string): boolean {
    return (symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/')
  }
}
