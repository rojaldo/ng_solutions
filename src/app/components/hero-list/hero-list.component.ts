import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  @Input() heroes = new Array<Hero>();
  @Output() removeIndex = new EventEmitter<number>();;

  constructor() { }

  ngOnInit() {
  }

  removeHero(heroIndex: number) {
    this.removeIndex.emit(heroIndex);
  }

}
