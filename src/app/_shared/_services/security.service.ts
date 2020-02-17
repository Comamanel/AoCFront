import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLoginModel } from 'src/app/_features/security/_models/user-login-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private httpClient: HttpClient) { }

  login(model: UserLoginModel): Observable<any>{
    return this.httpClient.post<any>(environment.apiEndPoint + "security/login", model);
  }

  logout(){
    localStorage.removeItem('TOKEN');
  }

  register(){

  }
}
