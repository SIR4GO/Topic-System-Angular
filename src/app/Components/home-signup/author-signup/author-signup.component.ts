import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-author-signup',
  templateUrl: './author-signup.component.html',
  styleUrls: ['./author-signup.component.css']
})
export class AuthorSignupComponent implements OnInit {

  private active: boolean;

  constructor() { }

  ngOnInit() {

    $('.author-button').addClass('edit-background');
    $('.follower-button').removeClass('edit-background');
    $('.signup-face , .signup-gmail').css('display' ,'block');


  }





}
