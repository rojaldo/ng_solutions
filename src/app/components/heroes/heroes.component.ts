import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  newHero = new Hero();
  heroes: Hero[] = [new Hero('Superman', 'Man of steel'),
  new Hero('Spiderman', 'Spidy'),
  new Hero('Batman', 'Dark knight')];
  hero = '';
  constructor() { }

  ngOnInit() {
  }

  addHero() {
    this.heroes.push(new Hero(this.newHero.name, this.newHero.description));
    this.newHero = new Hero();
  }

  disableButton(): boolean {
    return(this.newHero.name === '')
  }

  removeHero(heroIndex: number) {
    this.heroes.splice(heroIndex, 1);
  }

}
