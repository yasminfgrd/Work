import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { UsersComponent } from './pages/users/users.component';
import { UserclassComponent } from './pages/userclass/userclass.component';
import { UserprofileifComponent } from './pages/userprofileif/userprofileif.component';
import { FeaturesclassComponent } from './pages/featuresclass/featuresclass.component';
import { UserclassmsgComponent } from './pages/userclassmsg/userclassmsg.component';


const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'users', component: UsersComponent},
  {path:'userclass', component: UserclassComponent},
  {path:'userprofileif', component: UserprofileifComponent},
  {path:'featuresclass', component: FeaturesclassComponent},
  {path:'userclassmsg', component: UserclassmsgComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
