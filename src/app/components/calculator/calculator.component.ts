import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  
  display = '';

  constructor(private service: CalculatorService) { }

  ngOnInit() {
  }

  updateDisplay(newChar: any) {
    if(typeof newChar === 'string') {
      this.service.handleSymbol(newChar);
      this.display = this.service.display;
    }else if (typeof newChar === 'number'){
      this.service.handleNumber(newChar);
      this.display = this.service.display;
    }
  }

}
