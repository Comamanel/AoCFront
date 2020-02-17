import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CyclistService {

  constructor(private httpClient: HttpClient) { }

  getByUser(model: UserListModel): Observable<CyclistListModel>{
    return this.httpClient.get<CyclistListModel>(environment.apiEndPoint + 'cyclist/ByUser/' + model.id);
  }

  postByUser(model: UserListModel): Observable<CyclistListModel>{
    return this.httpClient.post<CyclistListModel>(environment.apiEndPoint + 'cyclist/ByUser', model);
  }
}
