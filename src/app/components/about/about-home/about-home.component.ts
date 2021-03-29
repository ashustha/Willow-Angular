import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about-home',
  templateUrl: './about-home.component.html',
  styleUrls: ['./about-home.component.scss'],
})
export class AboutHomeComponent implements OnInit {
  about = [];
  constructor(private service: AboutService) {}

  ngOnInit(): void {
    this.service.getAboutDetails().subscribe((response) => {
      this.about = response;
    });
  }
}
