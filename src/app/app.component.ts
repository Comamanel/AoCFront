import {Component, OnInit} from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import {NbMenuItem} from '@nebular/theme';
import {Router} from "@angular/router";
import { CyclistListModel } from './_core/_models/cyclist-list-model';
import { CyclistService } from './_core/_services/cyclist.service';
import { GlobalService } from './_core/_services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AoCFront';
  private _selectedCyclist: CyclistListModel;
   _userCyclists: CyclistListModel[];
  private _listItems: NbMenuItem[];
  private _defaultCyclist: CyclistListModel;

  get listItems(): NbMenuItem[] {
    return this._listItems;
  }

  get userCyclists(): CyclistListModel[] {
    return this._userCyclists;
  }

  set userCyclists(userCyclists: CyclistListModel[]){
    this._userCyclists = userCyclists;
  }

  get selectedCyclist(): CyclistListModel {
    return this._selectedCyclist;
  }

  set selectedCyclist(selectedCyclist: CyclistListModel) {
    this._selectedCyclist = selectedCyclist;
    this.cyclistService.cyclist$.next(selectedCyclist);
  }

  constructor(
    private cyclistService: CyclistService,
    private globalService: GlobalService,
    private router: Router
  ) {
    
  }
  
  ngOnInit(): void {
    this.globalService.refresh();
    this._defaultCyclist = {id: 0, firstName: "Choose your", lastName: "cyclist", age: null, country: null, weight: null, height: null, skillSetList: null};
    this._selectedCyclist = this._defaultCyclist;
    this.globalService.userCyclists$.subscribe(data => {
      this._userCyclists = data;
      if(data.length > 0){
        this._selectedCyclist = data[0];
      }
      else{
        this._selectedCyclist = this._defaultCyclist;
      }
    });
  }


  changeCyclist(e) {
    if (e === 'add') {
      this.router.navigateByUrl('/cyclist/add-cyclist');
    } else {
      this.globalService.selectedCyclist.next(e);
    }
  }
}
