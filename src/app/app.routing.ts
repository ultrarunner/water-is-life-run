import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { TherunComponent } from './therun/therun.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'user-profile', component: ProfileComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'therun', component: TherunComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
