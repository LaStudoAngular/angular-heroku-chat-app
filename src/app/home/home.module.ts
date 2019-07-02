import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULES
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../@shared/shared.module';

// COMPONENTS
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule]
})
export class HomeModule {}
