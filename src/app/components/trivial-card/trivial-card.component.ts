import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-trivial-card',
  templateUrl: './trivial-card.component.html',
  styleUrls: ['./trivial-card.component.scss']
})
export class TrivialCardComponent implements OnInit {

  @Input() card: Card;
  classesArray: string[] = [];

  constructor() { 
  }

  ngOnInit() {
    this.classesArray = new Array<string>(this.card.answers.length);
    for (let index = 0; index < this.classesArray.length; index++) {
      this.classesArray[index] = this.getClass(index);
    }
  }

  handleClick(buttonIndex: number) {
    this.card.responded = true;
    this.card.respondedIndex = buttonIndex;
    if(this.card.correctAnswer === this.card.answers[buttonIndex]) {
      this.card.rightAnswered = true;
    }
    for (let index = 0; index < this.classesArray.length; index++) {
      this.classesArray[index] = this.getClass(index);
    }
  }

  getClass(index: number) {
    if(this.card.responded === false ){
      return 'btn btn-primary btn-block';
    }else {
      if (this.card.answers[index] === this.card.correctAnswer) {
        return 'btn btn-success btn-block';  
      }else if (index === this.card.respondedIndex && !this.card.rightAnswered){
        return 'btn btn-danger btn-block';
      }
      return 'btn btn-secondary btn-block';
    }
  }

}
