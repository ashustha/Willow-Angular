import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss'],
  providers: [HomeService],
})
export class FullLayoutComponent implements OnInit {
  news = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getNews().subscribe((data) => {
      this.news = data;
      console.log(this.news);
    });
  }
}
