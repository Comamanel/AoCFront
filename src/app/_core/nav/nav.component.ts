import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { SecurityService } from '../_services/security.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  _listItems: NbMenuItem[];

  get listItems(): NbMenuItem[]{
    return this._listItems;
  }

  constructor(private securityService: SecurityService) { }

  ngOnInit(): void {
    this.securityService.refresh();
    this._listItems=[
      { title: 'Courses', children: [
        { title: 'Resultats', link: '/races/results', }
      ]},
      { title: 'Logout', link: '/security/logout', },
    ];
    this.securityService.context$.subscribe(x => {
      if(x != null){
        if(x['roles'].includes('ROLE_ADMIN')){
              this._listItems = [
                { title: 'Coureur', children: [
                  { title: 'Details', link: '/cyclist/details' },
                  /*{ title: 'Entrainement', link: '/cyclist/training' },
                  { title: 'Inscriptions', link: '/cyclist/registrations' }*/
                ]},
                /*{ title: 'Management', children: [
                  { title: 'Materiel', link: '/management/equipment' },
                  { title: 'Staff', link: '/management/staff' }
                ]},
                { title: 'Courses', children: [
                  { title: 'Resultats', link: '/races/results' },
                  { title: 'Simulations', link: '/races/simulation' }
                ]},
                { title: 'Admin Panel', link: '/admin' },*/
                { title: 'Logout', link: '/security/logout' },
              ];

        }
        else{
          this._listItems = [
            { title: 'Coureur', children: [
              { title: 'Details', link: '/cyclist/details' },
              /*{ title: 'Entrainement', link: '/cyclist/training' },
              { title: 'Inscriptions', link: '/cyclist/registrations' }*/
            ]},
            /*{ title: 'Management', children: [
              { title: 'Materiel', link: '/management/equipment' },
              { title: 'Staff', link: '/management/staff' }
            ]},
            { title: 'Courses', children: [
              { title: 'Resultats', link: '/races/results' }
            ]},*/
            { title: 'Logout', link: '/security/logout' },
          ];
        }
      }
      else{
        this._listItems = [
          { title: 'Courses', children: [
            { title: 'Resultats', link: '/races/results', }
          ]},
          { title: 'Register', link: '/security/register' },
          { title: 'Login', link: '/security/login', },
        ];
      }
    });
  }
  

}
