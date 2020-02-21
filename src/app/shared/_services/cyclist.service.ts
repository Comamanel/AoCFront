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
  private _cyclist$: BehaviorSubject<CyclistListModel>;
  private _user: UserListModel;

  public get cyclists$(): Observable<CyclistListModel[]>{
    return this._cyclists$.asObservable();
  }

  public get cyclist$(): BehaviorSubject<CyclistListModel>{
    return this._cyclist$;
  }

  public set cyclist$(cyclist: BehaviorSubject<CyclistListModel>){
    this._cyclist$ = cyclist;
  }

  constructor(private httpClient: HttpClient) {
    this._cyclists$ = new BehaviorSubject<CyclistListModel[]>([]);
    this.cyclist$ = new BehaviorSubject<CyclistListModel>(null);
  }

  refresh(){
      this.httpClient.post<CyclistListModel[]>(environment.apiEndPoint + 'cyclist/ByUser', this._user)
      .subscribe((c) => {
        this._cyclists$.next(c);
      });
  }

  register(model: CyclistListModel) {
    model.user = this._user.id;
    this.httpClient.post<void>(environment.apiEndPoint + 'cyclist/register', model).subscribe();
    // this.refresh();
  }

  refreshCyclist(){

  }

  setUser(model: UserListModel){
    this._user = model;
    this.refresh();
  }
}
