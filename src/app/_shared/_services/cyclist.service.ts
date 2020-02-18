import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CyclistListModel } from 'src/app/_models/cyclist-list-model';
import { UserListModel } from 'src/app/_models/user-list-model';

@Injectable({
  providedIn: 'root'
})
export class CyclistService {

  private _cyclists$: BehaviorSubject<CyclistListModel[]>;
  private _user: UserListModel;

  public get cyclists$(): Observable<CyclistListModel[]>{
    return this._cyclists$.asObservable();
  }

  constructor(private httpClient: HttpClient) { 
    this._cyclists$ = new BehaviorSubject<CyclistListModel[]>([]);
  }

  refresh(){
    return this.httpClient.post<CyclistListModel>(environment.apiEndPoint + 'cyclist/ByUser', this._user);
  }

  setUser(model: UserListModel){
    this._user = model;
    this.refresh();
  }
}
