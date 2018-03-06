import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { FireBaseResolve } from './services/firebase.resolve';

const routes: Routes =[
    { path: 'follow',      component: HomeComponent,
    resolve: {
      data: FireBaseResolve
    }, 
  
  },
    { path: 'feed',           component: UserComponent },
    { path: '',          redirectTo: 'follow', pathMatch: 'full' }
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
