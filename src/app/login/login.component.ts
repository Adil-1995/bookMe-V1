import { Component, OnInit } from '@angular/core';
declare const myLogin: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  onClick(){
    myLogin();
  }

}
