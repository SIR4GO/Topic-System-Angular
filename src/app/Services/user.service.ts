import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable } from 'rxjs';
import {User} from '../Models/User';
import {SocialSignInService} from './social-sign-in.service';
import {SocialUser} from 'angular-6-social-login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'content-type':'application/json',
    })
  };


  constructor(private http: HttpClient ) { }


  SignInSocialUser( role  , socialUser: SocialUser): Observable<any>{


     const user = {
       email: socialUser.email,
       name: socialUser.name,
       provider: socialUser.provider,
       role: role,
       password:socialUser.id,
       image: socialUser.image,
       id: socialUser.id,
     };

    return this.http.post('http://topic/api/sign' , user , this.httpOptions);
  }

}
