import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsHomeComponent } from './events-home/events-home.component';
import { EventsRoutingModule } from './events.routing.module';
import { EventsService } from './events.service';

@NgModule({
  declarations: [EventsHomeComponent],
  imports: [CommonModule, EventsRoutingModule],
  providers: [EventsService],
})
export class EventsModule {}
