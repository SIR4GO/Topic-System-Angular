import { Injectable } from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider, LinkedinLoginProvider, SocialUser
} from 'angular-6-social-login';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SocialSignInService {

  constructor(private socialAuthService: AuthService , private userService: UserService) { }

  public socialSignIn(socialPlatform : string , role:string = 'login') {

    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "linkedin") {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        // console.log(socialPlatform+" sign in data : " , userData);
         this.userService.SignInSocialUser(role ,  userData).subscribe((data) => console.log(data) , error => console.log(error) );

      }

    );


  }

}
