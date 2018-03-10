import { Component, Input, ViewEncapsulation  } from '@angular/core';
import {FirebaseService} from '../services/firebase';

@Component({
  selector: 'follow',
  templateUrl: 'follow.component.html',
  styleUrls: ['./follow.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class FollowComponent {
  @Input() admin : any ;
  constructor( public firebaseService: FirebaseService ) {
  }

  background_color: String ;
  ngOnInit() {
    
    if(window.localStorage.getItem('feedChoice').indexOf(this.admin) >= 0){
        this.background_color = "#e55e5e";
    }
  }

follow(event){
    
    let admin =  this.admin;
    if(event.target.style['backgroundColor'].length === 0){
        event.target.style['backgroundColor'] = "#e55e5e"
        let choice : any;
        this.firebaseService.addFollowers(admin);
    }else{
        event.target.style['backgroundColor'] = '';
        this.firebaseService.removeFollowers(admin);
    }
}

}
