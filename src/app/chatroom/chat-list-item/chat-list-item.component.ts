import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MessageService } from '../../@services/message.service';

import { ChatItem } from '../../@models/chat-item.model';
import { User } from '../../@models/chat-user.model';

import { ChatEditComponent } from '../chat-edit/chat-edit.component';

@Component({
  selector: 'ch-chat-list-item',
  templateUrl: './chat-list-item.component.html',
  styleUrls: ['./chat-list-item.component.scss']
})
export class ChatListItemComponent implements OnInit {
  @Input() item: ChatItem;
  user: User;

  constructor(
    private messageService: MessageService,
    public dialog: MatDialog
  ) {
    this.messageService.updateUser().subscribe(data => (this.user = data));
  }

  onDelete(item: ChatItem): void {
    this.messageService.deleteMessage(item.content.id);
  }

  onEdit(id: string): void {
    const dialogConfig: MatDialogConfig = {
      autoFocus: true,
      height: '250px',
      width: '600px',
      data: {
        title: 'Edit Message'
      }
    };
    this.messageService.editMessage(this.item.content.id);
    this.dialog.open(ChatEditComponent, dialogConfig);
  }

  ngOnInit() {}
}
