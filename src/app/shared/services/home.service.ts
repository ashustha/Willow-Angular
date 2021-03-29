import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INews } from 'src/app/_types/news';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {
  private _url: string = './../../../assets/data/news.json';

  constructor(private http: HttpClient) {}

  getNews(): Observable<INews[]> {
    return this.http.get<INews[]>(this._url);
  }
}
