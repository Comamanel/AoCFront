import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserLoginModel } from '../../_models/user-login-model';
import { SecurityService } from 'src/app/_shared/_services/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private securityService: SecurityService) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  login(){
    let login: UserLoginModel;
    login = this.loginForm.value;
    console.log(login);
    this.securityService.login(login).subscribe(
      (token) => {
        localStorage.setItem('Token', token);
        //TODO : toastrservice et redirection
      },
      (error) => {
        //TODO : toastrservice pour dire "vtff"
      }
    );
  }

}
