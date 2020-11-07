import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login.service";
import { ActivatedRoute, Router } from "@angular/router";
import {log} from "util";

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
    console.log(user)
    const observable = this._login.addUser(user)
    observable.subscribe( data => this.loginUser(data.email))
  }
  loginUser(user) {
    console.log('in the login function',user);
    const observable = this._login.loginUser(user.email)
    observable.subscribe(data => log('Got this user: ', data) )
  }
}
