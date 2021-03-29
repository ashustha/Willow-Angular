import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { ContactRoutingModule } from './contact.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactHomeComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ContactModule {}
