import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  listItems: NbMenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.listItems=[
        { title: 'Coureur', children: [
          { title: 'Details', link: '/cyclist/details' },
          { title: 'Entrainement', link: '/cyclist/training' },
          { title: 'Inscriptions', link: '/cyclist/registrations' }
        ]},
        { title: 'Management', children: [
          { title: 'Materiel', link: '/management/equipment'},
          { title: 'Staff', link: '/management/staff'}
        ]},
        { title: 'Courses', children: [
          { title: 'Resultats', link: '/races/results' },
          { title: 'Simulations', link: '/races/simulation' }
        ]},
        { title: 'Register', link: '/security/register' },
        { title: 'Login', link: '/security/login' },
        { title: 'Logout', link: '/security/logout' },
    ];

    //TO DO: changer le contenu de la navbar selon connecté ou pas, en admin ou pas (simulations qui disparaît si pas en admin, 
    //      tout sauf resultats qui disparaît si pas connecté, login et register remplacés par logout si connecté et inversément) 
  }

}
