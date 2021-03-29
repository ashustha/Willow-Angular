import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './shared/components/full-layout/full-layout.component';
const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    pathMatch: 'full',
  },

  {
    path: 'about',
    loadChildren: () =>
      import('src/app/components/about/about.module').then(
        (m) => m.AboutModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('src/app/components/contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('src/app/components/events/events.module').then(
        (m) => m.EventsModule
      ),
  },

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
