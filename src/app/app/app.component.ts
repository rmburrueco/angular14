import { Component, OnInit } from '@angular/core';
import { User } from '../user-profile/user-profile.component';

interface Persona {
  firstName: string;
  lastName: string;
  role: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mi aplicación';

  personas: Persona[] = [
    {
      firstName: 'Jessica',
      lastName: 'Alba',
      role: 'Admin',
    },
    {
      firstName: 'Laura',
      lastName: 'Pérez',
      role: 'Operadora',
    },
    {
      firstName: 'María',
      lastName: 'Zamora',
      role: 'Admin',
    },
  ];

  constructor() {
    console.log('1. appcomponent constructor');
  }

  ngOnInit(): void {
    console.log('2. appcomponent OnInit');
  }

  onUserSelect(user: User): void {
    console.log(
      `AppComponent. Se ha seleccionado el usuario
        ${user.name} con rol ${user.role}`
    ); //${nombre}
  }
}
