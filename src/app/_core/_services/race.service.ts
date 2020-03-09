import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RaceListModel } from '../_models/race-list-model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  private _raceList$: BehaviorSubject<RaceListModel[]>;

  public get raceList(): Observable<RaceListModel[]>{
    return this._raceList$.asObservable();
  }

  constructor(
    private httpClient: HttpClient
  ) { 
    this._raceList$ = new BehaviorSubject<RaceListModel[]>([]);
  }

  refresh(){
    //this.httpClient.get
  }

}
