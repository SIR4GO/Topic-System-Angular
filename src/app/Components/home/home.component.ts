import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {SocialSignInService} from '../../Services/social-sign-in.service';
import {interval} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , AfterViewInit {

  constructor(private socialSign: SocialSignInService ) {  }

  ngAfterViewInit(): void {

    // interval(6000)
    //   .subscribe((i)=> {
    //       console.log('hello mew');    // print hello each 6000 sec
    //   });

    // if( setTimeout(this.triggerClick ,  6000) )
    // {
    //   let elem: HTMLElement = document.getElementById('bt') as HTMLElement;
    //   setTimeout(function(){ elem.click(); }, 6000);
    //
    // }
  }

  triggerClick (): boolean
  {
    let element: HTMLElement = document.getElementById('st') as HTMLElement;
    element.click();

    return true;
  }


  ngOnInit() {
    $(document).ready(function () {
        const height  = $(window).height();
        $('header').height(height);


    });

  }


  popup() {
    const height = $(window).height();
    $('.popup').height(height).addClass('popup-overlay').css('display' , 'block');
    $('html, body').css({
      overflow: 'hidden',
      height: '100%'
    });
  }
  disablePopup() {
       $('.popup').css('display' , 'none');
      $('html , body').css({
         overflow: 'auto',
         height: 'auto',
      });
  }

  signIn( platform: string )
  {
    this.socialSign.socialSignIn(platform);
  }


}

