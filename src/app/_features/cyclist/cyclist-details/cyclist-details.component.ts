import { Component, OnInit, Input } from '@angular/core';
import { CyclistListModel } from 'src/app/_models/cyclist-list-model';
import { CyclistService } from 'src/app/shared/_services/cyclist.service';

@Component({
  selector: 'app-cyclist-details',
  templateUrl: './cyclist-details.component.html',
  styleUrls: ['./cyclist-details.component.scss']
})
export class CyclistDetailsComponent implements OnInit {
  cyclist: CyclistListModel;


  constructor(private cyclistService: CyclistService) { }

  ngOnInit(): void {
    this.cyclistService.cyclist$.subscribe(
      (data) => { 
        this.cyclist = data;
      }
    );
  }

}
