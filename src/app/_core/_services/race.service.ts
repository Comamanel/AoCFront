import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RaceListModel } from '../_models/race-list-model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  private _raceList: BehaviorSubject<RaceListModel[]>;

  public get 

  constructor(
    private httpClient: HttpClient
  ) { }


}
