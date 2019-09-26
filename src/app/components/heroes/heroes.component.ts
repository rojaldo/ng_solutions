import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  constructor(public service: HeroService) { }

  ngOnInit() {
    this.heroes = this.service.heroes;
  }

  addHero(hero: Hero) {
    this.service.heroes.push(hero);
  }

  removeHero(heroIndex: number) {
    this.service.heroes.splice(heroIndex, 1);
  }

}
