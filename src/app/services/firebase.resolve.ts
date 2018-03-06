import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/observable';
import * as firebase from 'firebase/app';

import {
    Router, Resolve,
    ActivatedRouteSnapshot
} from '@angular/router';
import { FirebaseService } from './firebase';

@Injectable()
export class FireBaseResolve implements Resolve<any> {
    constructor(private firebaseService: FirebaseService, private router: Router) { }
    
    resolve(route: ActivatedRouteSnapshot): firebase.Promise<any>   {

        return this.firebaseService.getUserDetails().once('value').then(data => {
            if (data) {
                let adminList= [];
                console.log(data.val());
                data.val().forEach(element => {
                    if(element['type'] === 'admin'){
                        adminList.push(element['name']);
                    }
                });

                return adminList;
            } 
        });
    }
}