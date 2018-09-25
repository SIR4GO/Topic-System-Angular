import {Routes} from '@angular/router';
import {HomeComponent} from '../Components/home/home.component';
import {NotFoundComponent} from '../Components/not-found/not-found.component';
import {HomeSignupComponent} from '../Components/home-signup/home-signup.component';
import {FollowerSignupComponent} from '../Components/home-signup/follower-signup/follower-signup.component';
import {AuthorSignupComponent} from '../Components/home-signup/author-signup/author-signup.component';


export const routes: Routes = [
  {path: '' , component: HomeComponent },
  {path: 'signup' , component: HomeSignupComponent , children: [
      {path: 'follower' , component: FollowerSignupComponent },
      {path: 'author' , component: AuthorSignupComponent  }
    ]},
  {path: '**', redirectTo: '' },
];
