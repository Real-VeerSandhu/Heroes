import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
}) // @decorator means metadata
export class HeroService {

  constructor(private messageService: MessageService,
    private http: HttpClient) { }
  /* serivce-in-service scenario: inject MessageService
  into HeroService which is injected into HeroesComponent */

  private log(message: string) { // frequent calls so use log()
    this.messageService.add(`HeroService: ${message}`);
  }
  private heroesUrl = "api/heroes";

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); // of returns an Observable<Hero> that emits the mock heroes array
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    // currently, assume that hero with specificed id always exists
    const hero = HEROES.find(h => h.id == id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}