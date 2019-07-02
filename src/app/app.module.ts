import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// COMPONENTS
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ChatEditComponent } from './chatroom/chat-edit/chat-edit.component';
import { ChatLoginComponent } from './chatroom/chat-login/chat-login.component';

// MODULES
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { ContactsModule } from './contacts/contacts.module';
import { ChatroomModule } from './chatroom/chatroom.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './@shared/shared.module';

// SERVICES
import { MessageService } from './@services/message.service';

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ContactsModule,
    ChatroomModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  entryComponents: [ChatEditComponent, ChatLoginComponent],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
