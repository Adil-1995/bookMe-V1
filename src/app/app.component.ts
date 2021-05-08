import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(
    private router: Router,
  ) { }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // loginForm!: FormGroup;
  // socialUser!: SocialUser;
  // isLoggedin: boolean = false;

  // constructor(
  //   private formBuilder: FormBuilder,
  //   private socialAuthService: SocialAuthService
  // ) { }

  // ngOnInit() {
  //   this.loginForm = this.formBuilder.group({
  //     email: ['', Validators.required],
  //     password: ['', Validators.required]
  //   });

  //   this.socialAuthService.authState.subscribe((user) => {
  //     this.socialUser = user;
  //     this.isLoggedin = (user != null);
  //     console.log(this.socialUser);
  //   });
  // }

  // loginWithGoogle(): void {
  //   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }

  // logOut(): void {
  //   this.socialAuthService.signOut();
  // }

}
