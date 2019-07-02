import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MessageService } from '../../@services/message.service';

import { ChatItem } from '../../@models/chat-item.model';
import { User } from '../../@models/chat-user.model';

import { ChatLoginComponent } from '../chat-login/chat-login.component';

@Component({
  selector: 'ch-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
  items: ChatItem[];
  user: User;
  title = '';

  constructor(private chatService: MessageService, public dialog: MatDialog) {}

  ngOnInit() {
    this.chatService.updatePosts().subscribe(data => (this.items = data));
    this.chatService.updateUser().subscribe(data => {
      this.user = data;
      this.title = this.user ? 'logout' : 'login';
    });
  }

  onLogin(): void {
    const dialogConfig: MatDialogConfig = {
      autoFocus: true,
      data: {
        title: 'Login Chat Room'
      }
    };
    this.dialog.open(ChatLoginComponent, dialogConfig);
  }

  onLogout(): void {
    this.chatService.logoutUser();
    this.title = 'login';
  }

  onSelect(): void {
    if (this.user) {
      this.onLogout();
    } else {
      this.onLogin();
    }
  }

  trackByFn(idx, item: ChatItem): string {
    return item.id;
  }
}
