import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/_core/_services/security.service';
import { CyclistService } from 'src/app/_core/_services/cyclist.service';
import { UserLoginModel } from 'src/app/_core/_models/user-login-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private securityService: SecurityService,
    private cyclistService: CyclistService,
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
    this.securityService.login(login).subscribe(
      (token) =>{
        console.log(token);
        localStorage.setItem('TOKEN', token.token);
        this.router.navigateByUrl('/cyclist/details');
      }
    );
    /*this.securityService.refresh();
    this.securityService.context$.subscribe(
      (a) =>{
        this.cyclistService.refresh();
        //TODO : toastrservice
      },
      () => {
        //TODO : toastrservice pour dire "vtff"

      },
      () => {},
    );*/
  }

}
