import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { RegisterLoginComponent} from './register-login/register-login.component';
const routes: Routes = [
  {path:'',component:RegisterLoginComponent},
  {path:'body',component:BodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
