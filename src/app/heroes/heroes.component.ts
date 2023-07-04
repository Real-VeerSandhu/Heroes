import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {

  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService:
    MessageService) {} 
  /* Its best practice to not call anything in the constructor.
  The constructor is used for minimal initialization, like writing 
  constructor parameters to properties. The constructor shouldnt
  do anything. */

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes =
      heroes); 
  } /* the old way was done sync, as if the server could instantly
  return the data/freeze UI. that doesnt work. This new way waits for
  observable to emit heroes which can happen now, 2s, 2 min, etc. Subscribe
  passes the emitted array back to the callback and sets the heroes property*/


}
