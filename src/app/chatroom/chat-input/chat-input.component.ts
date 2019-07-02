import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ChatItem } from '../../@models/chat-item.model';
import { User } from '../../@models/chat-user.model';
import { Message } from '../../@models/message.model';

import { MessageService } from '../../@services/message.service';

import * as faker from 'faker';

@Component({
  selector: 'ch-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {
  messageForm: FormGroup;
  user: User;
  message: ChatItem;

  constructor(private fb: FormBuilder, private chatService: MessageService) {}

  ngOnInit() {
    this.messageForm = this.fb.group({
      message: ['', [Validators.maxLength(140), Validators.minLength(2)]]
    });
    this.chatService.updateUser().subscribe(data => {
      this.user = data;
      if (!this.user) {
        this.messageForm.get('message').disable();
      } else {
        this.messageForm.get('message').enable();
      }
    });
  }

  onSubmit() {
    this.chatService.setPost(
      new ChatItem(
        this.user.id,
        this.user.name,
        new Message(
          faker.random.uuid(),
          this.messageForm.value.message,
          new Date()
        ),
        this.user.avatar
      )
    );
    this.messageForm.get('message').reset();
  }
}
