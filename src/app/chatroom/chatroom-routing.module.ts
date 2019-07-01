import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { ChatListComponent } from './chat-list/chat-list.component';

// ROUTES
const routes: Routes = [{ path: '', component: ChatListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatroomRoutingModule {}
