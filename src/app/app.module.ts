import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// COMPONENTS
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

// MODULES
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { ContactsModule } from './contacts/contacts.module';

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, ContactsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
