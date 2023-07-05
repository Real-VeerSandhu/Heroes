import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit{

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {} 
  /* Its best practice to not call anything in the constructor.
  The constructor is used for minimal initialization, like writing 
  constructor parameters to properties. The constructor shouldnt
  do anything. */

  ngOnInit(): void {
    this.getHeroes();
  }
  
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes =
      heroes); 
  } /* the old way was done sync, as if the server could instantly
  return the data/freeze UI. that doesnt work. This new way waits for
  observable to emit heroes which can happen now, 2s, 2 min, etc. Subscribe
  passes the emitted array back to the callback and sets the heroes property*/


}
