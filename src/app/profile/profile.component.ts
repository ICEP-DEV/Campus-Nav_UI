import { Component, OnInit } from '@angular/core';
import { RegisterService} from '../services/register.service';
import { User } from '../api/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss' ]
})
export class ProfileComponent implements OnInit {
users: any= new User('','','','','','','');
  constructor(private registerService:RegisterService) { }

ngOnInit() {
this.registerService.getuser().subscribe(result =>{
console.log(result);
this.users=result;
console.log(this.users,"==")
    })
  }
  
  

}

  