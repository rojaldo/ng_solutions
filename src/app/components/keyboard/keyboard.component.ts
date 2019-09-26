import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  @Output() signal = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  handleNumber(myNumber: number) {
    this.signal.emit(myNumber);
  }
  handleSymbol(symbol: string) {
    this.signal.emit(symbol);
  }

}
