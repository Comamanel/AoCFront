import {Component, OnInit} from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import {NbMenuItem} from '@nebular/theme';
import {Router} from "@angular/router";
import { CyclistListModel } from './_core/_models/cyclist-list-model';
import { CyclistService } from './_core/_services/cyclist.service';

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
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this._defaultCyclist = {id: 0, firstName: "Choose your", lastName: "cyclist", age: null, country: null, weight: null, height: null, skillSetList: null};
    this.selectedCyclist = this._defaultCyclist;
    this.getCyclists();


  }

  getCyclists(){
    this.cyclistService.refresh();
    let token = localStorage.getItem('TOKEN');
    this.cyclistService.cyclists$.subscribe((cyclists) => {
      this.userCyclists = cyclists;
      if(this.userCyclists.length > 0)
        this.selectedCyclist = this.userCyclists[0];
      else
        this.selectedCyclist = this._defaultCyclist;
    });
    /*if(token != null){
      let decoded = jwt_decode(token);
      let username: string;
      username = decoded['sub'];
      let cyclists: CyclistListModel[];
      // todo id non hardcode!!!
      this.cyclistService.setUser({username: username, id: 1});
      this.cyclistService.refresh();

    }*/
  }

  changeCyclist(e) {
    if (e === 'add') {
      this.router.navigateByUrl('/cyclist/add-cyclist');
    } else {
      this.selectedCyclist = e;
    }
  }
}
