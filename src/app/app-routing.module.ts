import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { ProfileComponent } from './profile/profile.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OurservicesComponent } from './ourservices/ourservices.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'login-reg',component:LoginRegComponent},
  {path:'home-page',component:HomePageComponent},
  {path:'profile',component:ProfileComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'contact',component: ContactsComponent},
  {path:'navigation',component:NavigationComponent},
  {path:'ourservices',component:OurservicesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
