import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../@services/message.service';

@Component({
  selector: 'ch-chat-login',
  templateUrl: './chat-login.component.html',
  styleUrls: ['./chat-login.component.scss']
})
export class ChatLoginComponent implements OnInit {
  title = '';
  loginForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ChatLoginComponent>,
    private fb: FormBuilder,
    private chatService: MessageService
  ) {
    this.title = data.title;
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: [null, Validators.required]
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onLogin(): void {
    this.chatService.setUser(this.loginForm.value.name);
    this.dialogRef.close();
  }
}
