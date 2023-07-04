import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[]= [];

  add(message: string) {
    this.messages.push(message);
  } // add message to cache

  clear() {
    this.messages = [];
  } // clear cache

  constructor() { }
}
