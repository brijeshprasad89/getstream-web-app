import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

//services

import {FirebaseService} from './services/firebase';
import {FireBaseResolve} from './services/firebase.resolve';
//firebase

//import follow component

import { FollowComponent } from './follow/follow.component';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from "angularfire2";


//AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyC68ekZ7Y0R3H_HmykFcj_rcREHUugFjBE",
  authDomain: "getStreamid.firebaseapp.com",
  databaseURL: "https://getStreamid.firebaseio.com",
  projectId: "getStreamid",
  storageBucket: "getStreamid.appspot.com",
  messagingSenderId: "22671407678"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    FollowComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [FirebaseService,FireBaseResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
