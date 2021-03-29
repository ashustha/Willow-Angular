import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEvents } from 'src/app/_types/events';

@Injectable()
export class EventsService {
  private _url: string = './../../../assets/data/events.json';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<IEvents[]> {
    return this.http.get<IEvents[]>(this._url);
  }
}
