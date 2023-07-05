import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
}) // @decorator means metadata
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); // of returns an Observable<Hero> that emits the mock heroes array
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
