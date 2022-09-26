import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landingpage';

  landingpage:any =FormGroup
  constructor(private fb:FormBuilder,private router:Router) { }
  GoToLogin()
  {
    this.router.navigate(['body'])

  }
  
}

