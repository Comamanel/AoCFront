import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as jwt_decode from 'jwt-decode';
import { CyclistService } from './cyclist.service';
import { TokenModel } from '../_models/token-model';
import { UserLoginModel } from '../_models/user-login-model';
import { UserRegisterModel } from '../_models/user-register-model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private _context$: BehaviorSubject<TokenModel>;

  get context$(): Observable<TokenModel>{
    return this._context$.asObservable();
  }

   refresh(){
      let token = localStorage.getItem('TOKEN');
      if(token != null)
        this._context$.next(jwt_decode(token));
      else
        this._context$.next(null); 

      this.cyclistService.setUser({'username': this._context$.value?this._context$.value['sub']:null, 'id': 0});
      this.cyclistService.refresh();
   }

  constructor(private httpClient: HttpClient, private cyclistService: CyclistService) { 
    
    this._context$ = new BehaviorSubject<TokenModel>(null);
  }

  login(model: UserLoginModel):Observable<any>{
    return this.httpClient.post<any>(environment.apiEndPoint + "security/login", model);
    /*.subscribe(
      (response) =>{
        localStorage.setItem('TOKEN', response.token);
        this._context$.next(jwt_decode(response.token));
      },
      (error) => {

      },
      () => {
        this.cyclistService.refresh();
      });*/
  }

  logout(){
    localStorage.removeItem('TOKEN');
    /*this._context$.next(null);
    this.cyclistService.refresh();*/
  }

  refreshUser(username: string): Observable<any>{
    return this.httpClient.post<any>(environment.apiEndPoint + "security/refresh", username);
  }

  register(model: UserRegisterModel): Observable<any>{
    return this.httpClient.post<any>(environment.apiEndPoint + "security/register", model);
  }
}
