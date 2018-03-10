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

getFeed(){
    this.firebaseService.getFeed()
    .subscribe(
        comments => console.log(comments), //Bind to view
         err => {
             // Log errors if any
             console.log(err);
   });
}

}
