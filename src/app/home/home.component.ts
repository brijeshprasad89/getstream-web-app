import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import * as Chartist from 'chartist';
import {FirebaseService} from '../services/firebase';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor(
    public firebaseService: FirebaseService,
    private route: ActivatedRoute
  ) { 
    // this.adminList = [];
  }
  adminList: any[];
  ngOnInit() {
    this.route.data
    .subscribe((data: { data: any }) => {
      this.adminList = data.data;
    });
    this.getAdminList();
    }
    getAdminList() {
      console.log(this.adminList);
    }
}
