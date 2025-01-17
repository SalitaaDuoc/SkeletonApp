import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private router: Router) { }

  navigateToHome(){
    this.router.navigate(['/home'])
  }

  onSubmit(){
    this.router.navigate(['/home'])
  }
}
