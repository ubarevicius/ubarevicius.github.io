import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { RouteComponent } from './route/route.component';

const routes: Routes = [
  {
    path: '',
    component: RouteComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [],
  declarations: [],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule { }
