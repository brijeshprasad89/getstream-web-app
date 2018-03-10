import { Injectable } from '@angular/core';
import {AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { FirebaseApp } from 'angularfire2';
import * as stream from 'getstream';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
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
  private http: Http
  ){}
  private feedsUrl = 'http://localhost:8080/feed/choice/actor1';
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
    let currentChoice = [];

    if(!window.localStorage.getItem('feedChoice')){
      currentChoice.push(admin);
      window.localStorage.setItem('feedChoice',JSON.stringify(currentChoice));
    }else{
      currentChoice = JSON.parse(window.localStorage.getItem('feedChoice'));
      if(currentChoice.indexOf(admin) == -1){
        currentChoice.push(admin);
      }
      window.localStorage.setItem('feedChoice',JSON.stringify(currentChoice));
    }
    firebase.database().ref('/feedChoice').child('User-1').set(currentChoice);
  }

  removeFollowers = function(admin){
    let currentChoice = [];
    currentChoice = JSON.parse(window.localStorage.getItem('feedChoice'));
    currentChoice.splice(currentChoice.indexOf(admin), 1);
    window.localStorage.setItem('feedChoice',JSON.stringify(currentChoice));
    firebase.database().ref('/feedChoice').child('User-1').set(currentChoice);
  }

   getFeed() : Observable<any> {
    
             // ...using get request
             return this.http.get(this.feedsUrl)
                            
                             .map((res:Response) => res.json())
                             //...errors if any
                             .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    
         }

}