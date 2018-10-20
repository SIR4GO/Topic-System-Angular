import {Routes} from '@angular/router';
import {HomeComponent} from '../Components/home/home.component';
import {NotFoundComponent} from '../Components/not-found/not-found.component';
import {HomeSignupComponent} from '../Components/home-signup/home-signup.component';
import {FollowerSignupComponent} from '../Components/home-signup/follower-signup/follower-signup.component';
import {AuthorSignupComponent} from '../Components/home-signup/author-signup/author-signup.component';
import {DashboardComponent} from '../Components/dashboard/dashboard.component';
import {RootActivationService} from '../Auth Services/RootActivation';
import {AuthorDashboardComponent} from '../Components/dashboard/author-dashboard/author-dashboard.component';
import {FollowerDashboardComponent} from '../Components/dashboard/follower-dashboard/follower-dashboard.component';







export const routes: Routes = [
  {path: '' , component: HomeComponent },
  {path: 'signup' , component: HomeSignupComponent , canActivate:[RootActivationService],children: [
      {path: 'follower' , component: FollowerSignupComponent },
      {path: 'author' , component: AuthorSignupComponent  },

    ]},


  {path:'dashboard'   , canActivate:[RootActivationService], children:[
      {path:'author' , component: AuthorDashboardComponent},
      {path:'follower' , component: FollowerDashboardComponent},
    ]},


  {path: '**', redirectTo: '' }, // must be last rout duo to cause redirect to '' if any route match from here
];
