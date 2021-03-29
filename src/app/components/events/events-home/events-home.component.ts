import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events-home',
  templateUrl: './events-home.component.html',
  styleUrls: ['./events-home.component.scss'],
})
export class EventsHomeComponent implements OnInit {
  events = [];

  constructor(private service: EventsService) {}

  ngOnInit(): void {
    this.service.getEvents().subscribe((data) => {
      this.events = data;
    });
  }
}
