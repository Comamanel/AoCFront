import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CyclistListModel } from '../_models/cyclist-list-model';
import { UserListModel } from '../_models/user-list-model';
import { CyclistAddModel } from '../_models/cyclist-add-model';

@Injectable({
  providedIn: 'root'
})
export class CyclistService {

  private _context$: BehaviorSubject<CyclistListModel[]>;
  private _cyclist$: BehaviorSubject<CyclistListModel>;
  private _user: UserListModel;

  public get context$(): Observable<CyclistListModel[]>{
    return this._context$.asObservable();
  }

  public get cyclist$(): BehaviorSubject<CyclistListModel>{
    return this._cyclist$;
  }

  public set cyclist$(cyclist: BehaviorSubject<CyclistListModel>){
    this._cyclist$ = cyclist;
  }

  constructor(private httpClient: HttpClient) {
    this._context$ = new BehaviorSubject<CyclistListModel[]>([]);
    this.cyclist$ = new BehaviorSubject<CyclistListModel>(null);
  }

  refresh() {
    if(this._user != null)
      this.httpClient.post<CyclistListModel[]>(environment.apiEndPoint + 'cyclist/ByUser', this._user)
      .subscribe((c) => {
        this._context$.next(c);
      });
  }

  register(model: CyclistAddModel) {
    /*model.user = this._user.username;
    this.httpClient.post<void>(environment.apiEndPoint + 'cyclist/add', model).subscribe();*/
    // this.refresh();
  }

  setUser(model: UserListModel){
    this._user = model;
  }
}
