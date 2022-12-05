import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavigationComponent } from './navigation/navigation.component';
import {HttpClientModule} from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { SliderHomepageComponent } from './slider-homepage/slider-homepage.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import{ReactiveFormsModule , FormsModule} from '@angular/forms';
import { OurservicesComponent } from './ourservices/ourservices.component'
import { NgToastModule } from 'ng-angular-popup';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginRegComponent,
    NavBarComponent,
    FooterComponent,
    HomePageComponent,
    ProfileComponent,
    GalleryComponent,
    ContactsComponent,
    NavigationComponent,
    SliderHomepageComponent,
    OurteamComponent,
    OurservicesComponent,
    ForgotpasswordComponent
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
