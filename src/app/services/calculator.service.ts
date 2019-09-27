import { Injectable } from '@angular/core';

enum State { InitState, FirstFigureState, SecondFigureState, ResultState };

@Injectable()
export class CalculatorService {

  historic: Historic[] = [];
  index = 0;

  constructor() {
    this.historic.push(new Historic());
  }

  handleNumber(myNumber: number) {
    console.log(this.historic.length);
    
    switch (this.historic[this.historic.length - 1].currentState) {
      case State.InitState:
        this.historic[this.historic.length - 1].firstFigure = myNumber;
        this.historic[this.historic.length - 1].display += myNumber;
        this.historic[this.historic.length - 1].currentState = State.FirstFigureState;
        break;
      case State.FirstFigureState:
        this.historic[this.historic.length - 1].firstFigure = this.historic[this.historic.length - 1].firstFigure * 10 + myNumber;
        this.historic[this.historic.length - 1].display += myNumber;
        break;
      case State.SecondFigureState:
        this.historic[this.historic.length - 1].secondFigure = this.historic[this.historic.length - 1].secondFigure * 10 + myNumber;
        this.historic[this.historic.length - 1].display += myNumber;
        break;
      case State.ResultState:
        this.historic.push(new Historic());
        this.historic[this.historic.length - 1].firstFigure = myNumber;
        this.historic[this.historic.length - 1].display = String(myNumber);
        this.historic[this.historic.length - 1].currentState = State.FirstFigureState;
        break;
      default:
        break;
    }
  }
  handleSymbol(symbol: string) {
    switch (this.historic[this.historic.length - 1].currentState) {
      case State.InitState:
        break;
      case State.FirstFigureState:
        if (this.isOperator(symbol)) {
          this.historic[this.historic.length - 1].operator = symbol;
          this.historic[this.historic.length - 1].display += symbol;
          this.historic[this.historic.length - 1].currentState = State.SecondFigureState;
        }
        break;
      case State.SecondFigureState:
        if (symbol === '=') {
          this.historic[this.historic.length - 1].result = this.resolve();
          this.historic[this.historic.length - 1].display = this.historic[this.historic.length - 1].display + '=' + this.historic[this.historic.length - 1].result;
          this.historic[this.historic.length - 1].currentState = State.ResultState;
        }
        break;
      case State.ResultState:
        if (this.isOperator(symbol)) {
          const lastResult = this.historic[this.historic.length - 1].result;
          this.historic.push(new Historic());
          this.historic[this.historic.length - 1].firstFigure = lastResult;
          this.historic[this.historic.length - 1].operator = symbol;
          this.historic[this.historic.length - 1].display = this.historic[this.historic.length - 1].firstFigure + symbol;
          this.historic[this.historic.length - 1].currentState = State.SecondFigureState;
        }
        break;
      default:
        break;
    }

  }

  resolve(): number {
    switch (this.historic[this.historic.length - 1].operator) {
      case '+':
        return this.historic[this.historic.length - 1].firstFigure + this.historic[this.historic.length - 1].secondFigure;
      case '-':
        return this.historic[this.historic.length - 1].firstFigure - this.historic[this.historic.length - 1].secondFigure;
      case '*':
        return this.historic[this.historic.length - 1].firstFigure * this.historic[this.historic.length - 1].secondFigure;
      case '/':
        return this.historic[this.historic.length - 1].firstFigure / this.historic[this.historic.length - 1].secondFigure;
      default:
        break;
    }
  }

  isOperator(symbol: string): boolean {
    return (symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/')
  }

}

class Historic {
  constructor(public display = '',
    public currentState = State.InitState,
    public firstFigure = 0,
    public secondFigure = 0,
    public result = 0,
    public operator = '') { }
}