import { Injectable } from '@angular/core';
import {AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { FirebaseApp } from 'angularfire2';


/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseService {
  public email :any ; 
  public encodedEmail : string;
  constructor(
  public afd : AngularFireDatabase,
  ){}
  ngOnInit(){
  }
  
  checkConnection()
  {
    return navigator.onLine;
    
  }

  getUserDetails = function(){
    return firebase.database().ref('/Users/');
  }

  addFollowers = function(admin){
    firebase.database().ref('/feedChoice').child('User-1').set(admin);
  }


}