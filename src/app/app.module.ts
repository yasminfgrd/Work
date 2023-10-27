import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { UsersComponent } from './pages/users/users.component';
import { UserclassComponent } from './pages/userclass/userclass.component';
import { UserprofileifComponent } from './pages/userprofileif/userprofileif.component';
import { FeaturesclassComponent } from './pages/featuresclass/featuresclass.component';
import { UserclassmsgComponent } from './pages/userclassmsg/userclassmsg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    UsersComponent,
    UserclassComponent,
    UserprofileifComponent,
    FeaturesclassComponent,
    UserclassmsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
