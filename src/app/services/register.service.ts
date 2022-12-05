import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User, login} from 'src/app/api/models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  _url ='http://localhost:3000/api/user';
  login_url='http://localhost:3000/api/login';
  
constructor(private http:HttpClient) { }
register(data:User)
{   return this.http.post(this._url,data);
 }
 getusers(){
return this.http.get(this._url)
 }


login(data:login)
{
  return this.http.post(this.login_url,data)

}

getlogin()
{
return this.http.get(this.login_url)
}

}
