import { Component, Input, OnInit } from '@angular/core';
import { TreeModule } from 'angular-tree-component';
import {FirebaseService} from '../services/firebase';
import * as _ from "lodash";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  // templateUrl: `<tree-root [focused]="true" [nodes]="nodes"></tree-root>`,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() admin : any ;
  constructor( public firebaseService: FirebaseService ) { }

  isDataAvailable:boolean = false;
  feeds : any[];
  data: any;

  ngOnInit() {
    this.firebaseService.getFeed()
    .subscribe(
        feed => {
          
          this.data = feed;
          let finalFeed = [];
          console.log(this.data);
          this.data.results.forEach(element => {

            let messages = [];
            let temp ={'verb':element['verb'],'messages': []};
            
            for(let i=0;i<element['activities'].length;i++){
              messages.push(element['activities'][i]['message']);
            }
            temp['messages'] = messages;
            finalFeed.push(temp);
            
          });
          this.feeds = finalFeed;
          this.isDataAvailable = true;
          console.log(this.feeds);
        } , 
         err => {
             // Log errors if any
             console.log(err);
   });
  }


}
