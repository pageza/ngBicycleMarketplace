import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login.service";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {'fname': '', 'lname': '', 'email': '', 'password': ''};
  registered: boolean = true;

  constructor(
    private _login: LoginService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
  }
  addUser(user) {
    const observable = this._login.addUser(user)
    observable.subscribe( data => console.log('This is the user in the component: ',data))
  }
  loginUser(user) {
    console.log(user);

  }
}
