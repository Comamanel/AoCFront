import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/_core/_services/security.service';
import { CyclistService } from 'src/app/_core/_services/cyclist.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private securityService: SecurityService,
    private cyclistService: CyclistService
    ) { }

  ngOnInit(): void {
    this.securityService.logout();
    this.securityService.refresh();
    this.cyclistService.refresh();
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
    this.router.navigateByUrl('security/login');
  }

}
