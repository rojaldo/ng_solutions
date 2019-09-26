import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable()
export class HeroService {

  heroes: Hero[] = [new Hero('Superman', 'Man of steel'),
  new Hero('Spiderman', 'Spidy'),
  new Hero('Batman', 'Dark knight')];
  
  constructor() { }
}
