import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loggedIn: boolean = false;
  username: string = '';
  password: string = '';

  constructor(private router:Router) {}
  
  authenticated() {
    if (this.username === "admin" && this.password === "admin") {

      this.router.navigate(['users']);
      this.loggedIn = true;
      
    } else {
      this.loggedIn = false;
      alert("Usuário ou senha incorretos.");
    }
  }








}
