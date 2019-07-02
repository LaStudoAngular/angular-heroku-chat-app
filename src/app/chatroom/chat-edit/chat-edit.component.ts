import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { MessageService } from '../../@services/message.service';

import { ChatItem } from '../../@models/chat-item.model';
import { Message } from '../../@models/message.model';

@Component({
  selector: 'ch-chat-edit',
  templateUrl: './chat-edit.component.html',
  styleUrls: ['./chat-edit.component.scss']
})
export class ChatEditComponent implements OnInit {
  editForm: FormGroup;
  title = '';
  item: ChatItem;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ChatEditComponent>,
    private fb: FormBuilder,
    private chatService: MessageService
  ) {
    this.title = data.title;
  }

  ngOnInit() {
    this.editForm = this.fb.group({
      message: ['']
    });
    this.chatService.updateMessage().subscribe((data: ChatItem) => {
      this.item = data;
      this.editForm.patchValue({
        message: this.item.content.message
      });
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    const newItem = new ChatItem(
      this.item.id,
      this.item.author,
      new Message(
        this.item.content.id,
        this.editForm.get('message').value,
        new Date()
      ),
      this.item.avatar
    );
    this.chatService.setPost(newItem);
    this.dialogRef.close();
  }
}
