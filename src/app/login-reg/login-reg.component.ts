import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup , FormBuilder, Validators,FormControl, MinLengthValidator } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import {login, User} from 'src/app/api/models/user';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.scss']
})
export class LoginRegComponent implements OnInit {

  userModel = new User('','','','','','','');
  users:any;
  getlogin:any;
  userlogin = new login('','');

// loginForm!:FormGroup ;
// signupForm!:FormGroup;

// user_id: FormControl;
// first_name: FormControl;
// last_name: FormControl;
// gender: FormControl;
// user_type: FormControl;
// user_email: FormControl;
// password: FormControl;


 constructor(private reg_login:RegisterService ,private formBuilder: FormBuilder, private router:Router, private toast: NgToastService ) {}
   

   

  ngOnInit(): void {
    // this.signupForm = new FormGroup( {user_id : new FormControl('',[Validators.required,Validators.maxLength(13),Validators.minLength(13)]) });
    // this.signupForm = new FormGroup( {first_name : new FormControl('',[Validators.required])  });
    // this.signupForm = new FormGroup( {last_name: new FormControl('',[Validators.required]) });
    // this.signupForm = new FormGroup( {gender: new FormControl('',[Validators.required]) });
    // this.signupForm = new FormGroup( {user_type: new FormControl('',[Validators.required])  });
    // this.signupForm = new FormGroup( {user_email : new FormControl('',[Validators.required])  });
    // this.signupForm = new FormGroup( {password : new FormControl('',[Validators.required])  });

    // this.loginForm = new FormGroup( {user_email : new FormControl('',[Validators.required])  });
    // this.loginForm = new FormGroup( {user_email : new FormControl('',[Validators.required])  });


    // this.signupForm = this.formBuilder.group({
      
    //  'user_id':this.user_id ,
    //  'first_name':this.first_name,
    //  'last_name':this.last_name,
    //  'gender': this.gender,
    //  'user_type':this.user_type,
    //  'user_email':this.user_email,
    //  'password': this.password 
    // })  
    // this.loginForm = this.formBuilder.group({
    //   'user_email':this.user_email,
    //   'password': this.password 
    // })

   };
  onSubmit(data:User){
   
    console.warn(data)
    this.reg_login.register(data).subscribe((data)=>{

      console.warn('success',data)


    },
    error=>{
    console.error('Error!',error);
    }
    )
 
this.router.navigate(['/home-page']);
   
    
}

OnLogin(data:login)
    {
      console.warn(data)
    this.reg_login.login(data).subscribe(
      data=>{
      console.warn('success',data)
      
    },
    
     error =>{
      console.error('Error!',error);
     }
     )

     

    this.router.navigate(['/home-page']);
  }

}




