import { Component, OnInit, Input } from '@angular/core';
import { CyclistListModel } from 'src/app/_core/_models/cyclist-list-model';
import { CyclistService } from 'src/app/_core/_services/cyclist.service';
import { GlobalService } from 'src/app/_core/_services/global.service';

@Component({
  selector: 'app-cyclist-details',
  templateUrl: './cyclist-details.component.html',
  styleUrls: ['./cyclist-details.component.scss']
})
export class CyclistDetailsComponent implements OnInit {
  cyclist: CyclistListModel;


  constructor(
    private cyclistService: CyclistService,
    private globalService: GlobalService
    ) { }

  ngOnInit(): void {
    this.cyclist = { id: 0, firstName: 'No Rider', lastName: 'Selected', country: 'No country', weight: 0, height:0, age:null, skillSetList: null};
    this.globalService.refresh();
      this.globalService.selectedCyclist.subscribe(data => {
        this.cyclist = data;
      })

  }

}
