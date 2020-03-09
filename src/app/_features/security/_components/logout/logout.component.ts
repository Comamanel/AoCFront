import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/_core/_services/security.service';
import { CyclistService } from 'src/app/_core/_services/cyclist.service';
import { GlobalService } from 'src/app/_core/_services/global.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private securityService: SecurityService,
    private cyclistService: CyclistService,
    private globalService: GlobalService
    ) { }

  ngOnInit(): void {
    if(localStorage.getItem('TOKEN') == null)
      this.router.navigateByUrl('security/login');
    this.securityService.logout();
    this.securityService.refresh();
    this.cyclistService.refresh();
    this.globalService.refresh();
    this.securityService.context$.subscribe(
      () =>{
        this.router.navigateByUrl('/cyclist/details');
        //TODO : toastrservice
      },
      () => {
        //TODO : toastrservice pour dire "vtff"

      },
      () => {},
    );
    localStorage.removeItem('TOKEN');
    this.globalService.refresh();
    this.router.navigateByUrl('security/login');
  }

}
