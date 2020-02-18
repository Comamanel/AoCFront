import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavComponent } from 'src/app/_core/nav/nav.component';
import { SecurityService } from 'src/app/_shared/_services/security.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private securityService: SecurityService
    ) { }

  ngOnInit(): void {
    this.securityService.logout();
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
