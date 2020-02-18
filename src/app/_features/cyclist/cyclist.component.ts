import { Component, OnInit, Input } from '@angular/core';
import { CyclistListModel } from 'src/app/_models/cyclist-list-model';

@Component({
  selector: 'app-cyclist',
  templateUrl: './cyclist.component.html',
  styleUrls: ['./cyclist.component.scss']
})
export class CyclistComponent implements OnInit {
  cyclist: CyclistListModel;


  @Input() public set setCyclist(cyclist: CyclistListModel){
    this.cyclist = cyclist;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
