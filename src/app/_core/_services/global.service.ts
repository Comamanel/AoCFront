import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CyclistListModel } from '../_models/cyclist-list-model';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserListModel } from '../_models/user-list-model';
import { CyclistService } from './cyclist.service';
import { SecurityService } from './security.service';
import { UserLoginModel } from '../_models/user-login-model';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private _userCyclists$: BehaviorSubject<CyclistListModel[]>;
  private _user$: BehaviorSubject<UserListModel>;
  private _selectedCyclist: BehaviorSubject<CyclistListModel>;

  public get user$(): Observable<UserListModel>{
    return this._user$.asObservable();
  }

  public get userCyclists$(): Observable<CyclistListModel[]>{
    return this._userCyclists$.asObservable();
  }

  public get selectedCyclist(): BehaviorSubject<CyclistListModel>{
    return this._selectedCyclist;
  }

  constructor(
    private httpClient: HttpClient,
    private cyclistService: CyclistService,
    private securityService: SecurityService,
    private router : Router
  ) {
    this._user$ = new BehaviorSubject<UserListModel>(null);
    this._userCyclists$ = new BehaviorSubject<CyclistListModel[]>([]);
    this._selectedCyclist = new BehaviorSubject<CyclistListModel>(null);
   }

  refresh(){
    let token = localStorage.getItem('TOKEN');
    if(token)
    {
      const decoded = jwt_decode(token);
      let id = this.securityService.refreshUser(decoded.sub).subscribe(user => {
        this._user$.next(user);
        this.cyclistService.setUser(user);
        this.cyclistService.refresh();
        this.cyclistService.context$.subscribe(data => {
          this._userCyclists$.next(data);
          if(data.length > 0){
            this._selectedCyclist.next(data[0]);
          }
          else{
            this._selectedCyclist.next( {id: 0, firstName: "Choose your", lastName: "cyclist", age: null, country: null, weight: null, height: null, skillSetList: null})
          }
        });
      });
    }
    else{
      this._userCyclists$.next([]);
      this._user$.next(null);
    }
  }

  login(model: UserLoginModel){
    this.securityService.login(model).subscribe(response =>{
      localStorage.setItem('TOKEN', response.token);
      const decoded = jwt_decode(response.token);
      this.securityService.refreshUser(decoded.sub).subscribe(user => {
        this.cyclistService.setUser(user);
        this.cyclistService.refresh();
        this._user$.next(user);
        this.cyclistService.context$.subscribe(data => {
          this._userCyclists$.next(data);
          this.router.navigateByUrl('cyclist/details');
        })
      })
    })
  }

}
