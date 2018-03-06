import { Component, Input, ViewEncapsulation  } from '@angular/core';
import {FirebaseService} from '../services/firebase';

@Component({
  selector: 'follow',
  templateUrl: 'follow.component.html',
  encapsulation: ViewEncapsulation.None
})

export class FollowComponent {
  @Input() admin : any ;
  constructor( public firebaseService: FirebaseService ) {
  }

  ngOnInit() {
    
  }

open(event){
    if(event.target.style['backgroundColor'].length === 0){
        event.target.style['backgroundColor'] = "#e55e5e"
        let choice : any;
        if(window.localStorage.getItem('feedChoice')){
            choice = window.localStorage.getItem('feedChoice');
        }
        this.firebaseService.addFollowers('admin');
    }else{
        event.target.style['backgroundColor'] = '';
    }
}

}
