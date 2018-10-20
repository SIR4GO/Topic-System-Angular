import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Router} from '@angular/router';
import {SocialSignInService} from '../../Services/social-sign-in.service';
import {UserService} from '../../Services/user.service';



@Component({
  selector: 'app-home-signup',
  templateUrl: './home-signup.component.html',
  styleUrls: ['./home-signup.component.css']
})
export class HomeSignupComponent implements OnInit {

  role: any = 'author';
  constructor(private router: Router , private socialSign: SocialSignInService , private register: UserService) {
    //this.router.navigate(['/signup/author']); // redirect to default child component

  }


  ngOnInit() {

    $('.signup-face , .signup-gmail').css('display' ,'none');
    const height = $(window).height();
    $('.signup-options').height(height);

  }


  changeBackground(actor:any)
  {
    $(actor).addClass('edit-temp-background');
  }

  removeBackground(actor:any)
  {
    $(actor).removeClass('edit-temp-background')
  }


  // listen to click  event on buttons
  changeUrl(actor:any)
  {
    if(actor.value.includes('author') )
    {
      this.router.navigate(['/signup/author']);

    }else if (actor.value.includes('follower') )
    {
      this.router.navigate(['/signup/follower']);

    }

  }


  signIn( platform: string )
  {
    // first solution
    if(this.router.url.includes('author'))
       this.role = 'author';
    if(this.router.url.includes('follower'))
       this.role =  'follower';
    //console.log(this.role);



    this.socialSign.socialSignIn(platform , this.role);
  }




}
