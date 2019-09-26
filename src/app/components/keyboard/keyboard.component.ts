import { Component, OnInit, Output, EventEmitter } from '@angular/core';

enum State { InitState, FirstFigureState, SecondFigureState, ResultState };

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  @Output() signal = new EventEmitter<string>();
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
        this.signal.emit(this.display);
        this.currentState = State.FirstFigureState;
        break;
      case State.FirstFigureState:
        this.firstFigure = this.firstFigure * 10 + myNumber;
        this.display += myNumber;
        this.signal.emit(this.display);
        break;
      case State.SecondFigureState:
        this.secondFigure = this.secondFigure * 10 + myNumber;
        this.display += myNumber;
        this.signal.emit(this.display);
        break;
      case State.ResultState:
        this.firstFigure = myNumber;
        this.secondFigure = 0;
        this.operator = '';
        this.result = 0;
        this.display = String(myNumber);
        this.signal.emit(this.display);
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
          this.signal.emit(this.display);
          this.currentState = State.SecondFigureState;
        }
        break;
      case State.SecondFigureState:
        if (symbol === '=') {
          this.result = this.resolve();
          this.display = this.display + '=' + this.result;
          this.signal.emit(this.display);
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
          this.signal.emit(this.display);
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
