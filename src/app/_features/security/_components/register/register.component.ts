import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/_validators/custom-validators';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/_core/_services/security.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private securityService: SecurityService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.compose([
        Validators.email,
        Validators.required
      ])),
      'password': new FormControl(null, Validators.required),
      'confirmPwd': new FormControl(null)
    }, Validators.compose([
      CustomValidators.compare('password', 'confirmPwd')
    ]))
  } 

  onSubmit(){
    console.log(this.registerForm);
    if(this.registerForm.valid)
      this.securityService.register(this.registerForm.value).subscribe(
        (data) => {
          this.router.navigateByUrl('/security/login');
          //TODO: TOASTER
        },
        (error) =>{
          console.log(error);
          //TODO: engueuler l'user même si c'est pas de sa faute si le register a foiré
        },
        () =>{
          //aucune idée
        }
        )
  }
}
