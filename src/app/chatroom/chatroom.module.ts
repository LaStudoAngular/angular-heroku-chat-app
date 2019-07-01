import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULES
import { ChatroomRoutingModule } from './chatroom-routing.module';

// COMPONENTS
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatListItemComponent } from './chat-list-item/chat-list-item.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatLoginComponent } from './chat-login/chat-login.component';
import { ChatEditComponent } from './chat-edit/chat-edit.component';

@NgModule({
  declarations: [
    ChatListComponent,
    ChatListItemComponent,
    ChatInputComponent,
    ChatLoginComponent,
    ChatEditComponent
  ],
  imports: [CommonModule, ChatroomRoutingModule]
})
export class ChatroomModule {}
