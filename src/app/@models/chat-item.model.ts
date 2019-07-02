import { Message } from './message.model';

export class ChatItem {
  constructor(
    public id: string,
    public author: string,
    public content: Message,
    public avatar: string
  ) {}
}
