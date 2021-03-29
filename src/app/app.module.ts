import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FullLayoutComponent } from './shared/components/full-layout/full-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ReviewsComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    FullLayoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
