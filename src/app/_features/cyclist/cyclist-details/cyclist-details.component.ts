import { Component, OnInit, Input } from '@angular/core';
import { CyclistListModel } from 'src/app/_models/cyclist-list-model';

@Component({
  selector: 'app-cyclist-details',
  templateUrl: './cyclist-details.component.html',
  styleUrls: ['./cyclist-details.component.scss']
})
export class CyclistDetailsComponent implements OnInit {
  cyclist: CyclistListModel;


  constructor() { }

  ngOnInit(): void {
  }

}
