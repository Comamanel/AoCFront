import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { CyclistListModel } from './_models/cyclist-list-model';
import { NbMenuItem } from '@nebular/theme';
import { CyclistService } from './shared/_services/cyclist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AoCFront';
  private _selectedCyclist: CyclistListModel;
  private _userCyclists: CyclistListModel[];
  private _listItems: NbMenuItem[];

  get listItems(): NbMenuItem[]{
    return this._listItems;
  }

  get userCyclists(): CyclistListModel[]{
    return this._userCyclists;
  }

  get selectedCyclist(): CyclistListModel{
    return this._selectedCyclist;
  }

  set selectedCyclist(selectedCyclist: CyclistListModel){
    this._selectedCyclist = selectedCyclist;
    this.cyclistService.cyclist$.next(selectedCyclist);
  }
  

  constructor(
    private cyclistService: CyclistService
    ){

  }

  ngOnInit(): void {
    this.selectedCyclist = {id: 0, firstName: "Choose your", lastName: "cyclist", age: null, country: null, weight: null, height: null, skillSetList: null};
    this.getCyclists();
    

  } 

  getCyclists(){
    let token = localStorage.getItem('TOKEN');
    if(token != null){
      let decoded = jwt_decode(token); 
      let username: string;
      username = decoded['sub'];
      let cyclists: CyclistListModel[];
      this.cyclistService.setUser({'username': username, 'id': '0'});
      this.cyclistService.refresh();
      this.cyclistService.cyclists$.subscribe((cyclists) => {
        this._userCyclists = cyclists;
        if(this.userCyclists.length > 0)
          this.selectedCyclist = this.userCyclists[0];
      });
    }
  }

  changeCyclist(e){
    this.selectedCyclist = e;
  }
}
