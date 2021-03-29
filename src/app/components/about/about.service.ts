import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAbout } from 'src/app/_types/about';
@Injectable()
export class AboutService {
  private _url: string = './../../../assets/data/about.json';

  constructor(private http: HttpClient) {}

  getAboutDetails(): Observable<IAbout[]> {
    return this.http.get<IAbout[]>(this._url);
  }
}
