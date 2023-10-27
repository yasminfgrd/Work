import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  


  openNav() {
    const myNav = document.getElementById("myNav");
    if (myNav) {
      myNav.style.width = '100%';
    }
  }
  closeNav() {
    const myNav = document.getElementById("myNav");
    if (myNav) {
      myNav.style.width = '0%';
    }
  }

  logout() {
    
  };


}
