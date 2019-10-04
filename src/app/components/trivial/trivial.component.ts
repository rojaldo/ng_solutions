import { Component, OnInit } from '@angular/core';
import { TrivialService } from 'src/app/services/trivial.service';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-trivial',
  templateUrl: './trivial.component.html',
  styleUrls: ['./trivial.component.scss']
})
export class TrivialComponent implements OnInit {

  resolved = false;
  response: any = {};
  cards: Card[] = [];
  score = 0;

  constructor(private service: TrivialService) { }

  ngOnInit() {
    this.doRequest();
  }

  processResult(data: any) {
    this.response = data;
    for (const card of this.response.results) {
      this.cards.push(new Card(card));
    }
    this.resolved = true;
  }

  processError(error: any) {
    console.log(error);
  }

  handleAnswer(rightAnswered: boolean) {
    if(rightAnswered) {
      this.score += 2;
    }else {
      this.score -= 1;
    }
  }

  doRequest() {
    this.resolved = false;
    this.service.getRequest().subscribe(
      (data) => this.processResult(data),
      (error) => this.processError(error));
  }

  onScroll() {
    this.doRequest();
  }

}