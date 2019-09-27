import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  
  display = '';

  constructor(public service: CalculatorService) { }

  ngOnInit() {
  }

  updateIndex(index: number) {
    this.service.index = index;
    this.display = this.service.historic[index].display;
  }

  updateDisplay(newChar: any) {
    if(typeof newChar === 'string') {
      this.service.handleSymbol(newChar);
      this.display = this.service.historic[this.service.historic.length-1].display;
    }else if (typeof newChar === 'number'){
      this.service.handleNumber(newChar);
      this.display = this.service.historic[this.service.historic.length-1].display;
    }
  }

}
