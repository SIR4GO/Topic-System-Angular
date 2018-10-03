import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {routes} from './Routes/Routes';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import {APP_BASE_HREF} from '@angular/common';
import { HomeSignupComponent } from './Components/home-signup/home-signup.component';
import { FollowerSignupComponent } from './Components/home-signup/follower-signup/follower-signup.component';
import { AuthorSignupComponent } from './Components/home-signup/author-signup/author-signup.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider, LinkedinLoginProvider,
} from 'angular-6-social-login';
import {SocialSignInService} from './Services/social-sign-in.service';
import {UserService} from './Services/user.service';



// Configs
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("268815873963865")
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("371111978583-c2sbhkag9ervm0qtv4j5ur3jbkltqi88.apps.googleusercontent.com")
      },
      {
        id: LinkedinLoginProvider.PROVIDER_ID,
        provider: new LinkedinLoginProvider("1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com")
      },
    ]
);
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HomeSignupComponent,
    FollowerSignupComponent,
    AuthorSignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    SocialLoginModule,

  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    SocialSignInService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
