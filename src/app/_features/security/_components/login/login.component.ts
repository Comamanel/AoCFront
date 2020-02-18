import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserLoginModel } from 'src/app/_models/user-login-model';
import { SecurityService } from 'src/app/_shared/_services/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private securityService: SecurityService,
    private router: Router
    ) { }

  ngOnInit(): void {
    if(localStorage.getItem('TOKEN') != null)
      this.router.navigateByUrl('/home');
    this.loginForm=new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  login(){
    let login: UserLoginModel;
    login = this.loginForm.value;
    this.securityService.login(login);
    this.securityService.context$.subscribe(
      (a) =>{
        this.router.navigateByUrl('/cyclist/details');
        //TODO : toastrservice
      },
      () => {
        //TODO : toastrservice pour dire "vtff"

      },
      () => {},
    );
  }

}
