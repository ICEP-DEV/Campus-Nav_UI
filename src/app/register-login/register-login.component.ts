import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent implements OnInit {
  title = 'campusNav';
  Myimage: String = "assets/images/pin3.jpeg";
  constructor() { }

  ngOnInit(): void {
  }

}
