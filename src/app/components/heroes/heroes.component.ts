import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [new Hero('Superman', 'Man of steel'),
  new Hero('Spiderman', 'Spidy'),
  new Hero('Batman', 'Dark knight')];

  constructor() { }

  ngOnInit() {
  }

  addHero(hero: Hero) {
    this.heroes.push(hero);
  }

  removeHero(heroIndex: number) {
    this.heroes.splice(heroIndex, 1);
  }

}
