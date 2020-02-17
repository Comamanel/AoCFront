import { Component, OnInit } from '@angular/core';
import { CyclistService } from './_shared/_services/cyclist.service';
import * as jwt_decode from 'jwt-decode';
import { CyclistListModel } from './_features/security'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AoCFront';


  
  constructor(private cyclistService: CyclistService){

  }

  ngOnInit(): void {
  } 

  click(){
    let token = localStorage.getItem('TOKEN');
    let decoded = jwt_decode(token); 
    let username: string;
    username = decoded['sub'];
    console.log(username);

    let cyclists: CyclistListModel[];
    this.cyclistService.postByUser({'username': username, 'id': '0' }).subscribe(data => {
      console.log(data);
    })
    //console.log(decoded);   
  }
}
