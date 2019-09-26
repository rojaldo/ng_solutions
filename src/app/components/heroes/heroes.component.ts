import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroName = ''
  heroes = ['Superman', 'Spiderman', 'Batman'];
  hero = '';
  constructor() { }

  ngOnInit() {
  }

  addHero(){
    this.heroes.push(this.heroName); 
    this.heroName='';
  }

}
