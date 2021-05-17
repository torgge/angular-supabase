import {Component, OnInit} from '@angular/core';

export interface User {
  ID: number;
  Description: string;
}

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})

export class UserDetailComponent {
  title: string = 'This is the title of card';
  description: string = 'This is the description of card';
  user: User = null;
  colCountByScreen: Object = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4
  };

  constructor() {
    this.user = {
      ID: 1,
      Description: 'Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla ' +
        'bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla ' +
        'Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla bla '
    };
  }

}
