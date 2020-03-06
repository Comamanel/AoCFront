import { Component, OnInit, Input } from '@angular/core';
import { CyclistListModel } from 'src/app/_core/_models/cyclist-list-model';
import { CyclistService } from 'src/app/_core/_services/cyclist.service';

@Component({
  selector: 'app-cyclist-details',
  templateUrl: './cyclist-details.component.html',
  styleUrls: ['./cyclist-details.component.scss']
})
export class CyclistDetailsComponent implements OnInit {
  cyclist: CyclistListModel;


  constructor(private cyclistService: CyclistService) { }

  ngOnInit(): void {
    this.cyclist = { id: 0, firstName: 'No Rider', lastName: 'Selected', country: 'No country', weight: 0, height:0, age:null, skillSetList: null};
    this.cyclistService.refresh();
    this.cyclistService.cyclist$.subscribe(
      (data) => { 
        if(data)
          this.cyclist = data;
      }
    );
  }

}
