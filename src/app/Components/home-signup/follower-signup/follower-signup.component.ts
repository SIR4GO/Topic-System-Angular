import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-follower-signup',
  templateUrl: './follower-signup.component.html',
  styleUrls: ['./follower-signup.component.css']
})
export class FollowerSignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.author-button').removeClass('edit-background');
    $('.follower-button').addClass('edit-background');
    $('.signup-face , .signup-gmail').css('display' ,'block');
  }


}
