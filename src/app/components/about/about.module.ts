import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHomeComponent } from './about-home/about-home.component';
import { AboutRoutingModule } from './about.routing.module';
import { AboutService } from './about.service';

@NgModule({
  declarations: [AboutHomeComponent],
  imports: [CommonModule, AboutRoutingModule],
  providers: [AboutService],
})
export class AboutModule {}
