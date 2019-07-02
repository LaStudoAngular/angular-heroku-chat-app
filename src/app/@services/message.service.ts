import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Message } from '../@models/message.model';
import { ChatItem } from '../@models/chat-item.model';
import { User } from '../@models/chat-user.model';

import * as faker from 'faker';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages$ = new BehaviorSubject<ChatItem[]>(this.getData());
  message$ = new BehaviorSubject<ChatItem>(
    new ChatItem(
      faker.random.uuid(),
      `${faker.name.firstName()} ${faker.name.lastName()}`,
      new Message(
        faker.random.uuid(),
        faker.lorem.sentences(),
        faker.date.past()
      ),
      faker.image.avatar()
    )
  );
  user$ = new BehaviorSubject<User>(this.getUser());

  deleteMessage(id: string): void {
    const messages = [...JSON.parse(localStorage.getItem('messages'))].filter(
      el => el.content.id !== id
    );
    localStorage.setItem('messages', JSON.stringify(messages));
    this.messages$.next(messages);
  }

  editMessage(id: string) {
    const item = [...JSON.parse(localStorage.getItem('messages'))].find(
      el => el.content.id === id
    );
    this.message$.next(item);
  }

  updateMessage(): Observable<ChatItem> {
    return this.message$.asObservable();
  }

  updateUser(): Observable<User> {
    return this.user$.asObservable();
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  setUser(name: string): void {
    const existUser = JSON.parse(localStorage.getItem('messages')).find(
      (el: ChatItem) => el.author === name
    );
    if (existUser) {
      const oldUser = new User(
        existUser.id,
        existUser.author,
        existUser.avatar
      );
      this.user$.next(oldUser);
      localStorage.setItem('user', JSON.stringify(oldUser));
    } else {
      const newUser = new User(faker.random.uuid(), name, faker.image.avatar());
      localStorage.setItem('user', JSON.stringify(newUser));
      this.user$.next(newUser);
    }
  }

  logoutUser(): void {
    localStorage.removeItem('user');
    this.user$.next(undefined);
  }

  getData(): ChatItem[] {
    if (!JSON.parse(localStorage.getItem('messages'))) {
      this.initMessages();
    }
    return JSON.parse(localStorage.getItem('messages'));
  }

  updatePosts(): Observable<ChatItem[]> {
    return this.messages$.asObservable();
  }

  setPost(item: ChatItem): void {
    const original = JSON.parse(localStorage.getItem('messages'));
    const existObj = original.find(
      (el: ChatItem) => el.content.id === item.content.id
    );
    if (existObj) {
      existObj.content.message = item.content.message;
      existObj.content.date = item.content.date;
      localStorage.setItem('messages', JSON.stringify(original));
      this.messages$.next(original);
    } else {
      const items = [...JSON.parse(localStorage.getItem('messages')), item];
      localStorage.setItem('messages', JSON.stringify(items));
      this.messages$.next(items);
    }
  }

  private initMessages() {
    const messages = [
      new ChatItem(
        faker.random.uuid(),
        `${faker.name.firstName()} ${faker.name.lastName()}`,
        new Message(
          faker.random.uuid(),
          faker.lorem.sentences(),
          faker.date.past()
        ),
        faker.image.avatar()
      ),
      new ChatItem(
        faker.random.uuid(),
        `${faker.name.firstName()} ${faker.name.lastName()}`,
        new Message(
          faker.random.uuid(),
          faker.lorem.sentences(),
          faker.date.past()
        ),
        faker.image.avatar()
      ),
      new ChatItem(
        faker.random.uuid(),
        `${faker.name.firstName()} ${faker.name.lastName()}`,
        new Message(
          faker.random.uuid(),
          faker.lorem.sentences(),
          faker.date.past()
        ),
        faker.image.avatar()
      ),
      new ChatItem(
        faker.random.uuid(),
        `${faker.name.firstName()} ${faker.name.lastName()}`,
        new Message(
          faker.random.uuid(),
          faker.lorem.sentences(),
          faker.date.past()
        ),
        faker.image.avatar()
      ),
      new ChatItem(
        faker.random.uuid(),
        `${faker.name.firstName()} ${faker.name.lastName()}`,
        new Message(
          faker.random.uuid(),
          faker.lorem.sentences(),
          faker.date.past()
        ),
        faker.image.avatar()
      ),
      new ChatItem(
        faker.random.uuid(),
        `${faker.name.firstName()} ${faker.name.lastName()}`,
        new Message(
          faker.random.uuid(),
          faker.lorem.sentences(),
          faker.date.past()
        ),
        faker.image.avatar()
      ),
      new ChatItem(
        faker.random.uuid(),
        `${faker.name.firstName()} ${faker.name.lastName()}`,
        new Message(
          faker.random.uuid(),
          faker.lorem.sentences(),
          faker.date.past()
        ),
        faker.image.avatar()
      )
    ];
    localStorage.setItem('messages', JSON.stringify(messages));
  }
}
