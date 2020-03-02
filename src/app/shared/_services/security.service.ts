import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserLoginModel } from 'src/app/_models/user-login-model';
import { TokenModel } from 'src/app/_models/token-model';
import * as jwt_decode from 'jwt-decode';
import { UserRegisterModel } from 'src/app/_models/user-register-model';
import { CyclistService } from './cyclist.service';

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
    this._context$.next(null);
    this.cyclistService.refresh();
  }

  register(model: UserRegisterModel): Observable<any>{
    return this.httpClient.post<any>(environment.apiEndPoint + "security/register", model);
  }
}
