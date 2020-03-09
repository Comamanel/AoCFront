import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { GlobalService } from '../_services/global.service';
import * as jwt_decode from 'jwt-decode';
import { decode } from 'punycode';

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

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    this.globalService.refresh();
    this._listItems=[
      { title: 'Courses', children: [
        { title: 'Resultats', link: '/races/results', }
      ]},
      { title: 'Logout', link: '/security/logout', },
    ];
    console.log("coucou2");
    this.globalService.user$.subscribe(x => {
      if(x != null){
        let token = localStorage.getItem('TOKEN');
        let user = jwt_decode(token);
        if(user['roles'].includes('ROLE_ADMIN')){
              this._listItems = [
                { title: 'Coureur', children: [
                  { title: 'Details', link: '/cyclist/details' },
                  //{ title: 'Entrainement', link: '/cyclist/training' },
                  //{ title: 'Inscriptions', link: '/cyclist/registrations' }*/
                ]},
                { title: 'Management', children: [
                  //{ title: 'Materiel', link: '/management/equipment' },
                  //{ title: 'Staff', link: '/management/staff' }
                ]},
                { title: 'Courses', children: [
                  { title: 'Calendrier', link: '/races/list' },
                  //{ title: 'Resultats', link: '/races/results' },
                  //{ title: 'Simulations', link: '/races/simulation' }
                ]},
                //{ title: 'Admin Panel', link: '/admin' },
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
