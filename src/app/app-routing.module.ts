import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// ROUTES
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'chatroom',
    loadChildren: () =>
      import('./chatroom/chatroom.module').then(mod => mod.ChatroomModule)
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./contacts/contacts.module').then(mod => mod.ContactsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
