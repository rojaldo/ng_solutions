import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {
  newHero = new Hero();
  @Output() addNewHero = new EventEmitter<Hero>();
 
  constructor() { }

  ngOnInit() {
  }

  addHero() {
    this.addNewHero.emit(this.newHero);
    this.newHero = new Hero();
  }

  disableButton(): boolean {
    return(this.newHero.name === '')
  }
}