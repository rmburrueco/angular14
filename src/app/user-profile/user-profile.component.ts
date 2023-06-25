import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { LoggerService } from '../services/logger.service';

export interface User {
  name: string;
  role: string;
}

export enum Roles {
  Admin = 'Admin',
  Operador = 'Operador'
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [
    //{ provide: LoggerService, useClass: Logger2Service }
    //si inyectamos el servicio aquí -> hay una copia de cada servicio del logger
  ]
})
export class UserProfileComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  firstName = '';
  @Input()
  lastName = '';
  @Input()
  role = '';

  @Output()
  selected = new EventEmitter<User>();

  constructor(private logger: LoggerService) {
    this.logger.log('1. userProfile. constructor');
  }

  get isAdmin(): boolean {
    return this.role === Roles.Admin;
  }

  ngOnInit(): void {
    this.logger.log('2. userProfile. OnInit');
  }

  ngOnDestroy(): void {
    this.logger.log('3. userProfile. OnDestroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.log(changes);
  }

  seleccionar() {
    //const nombreCompleto = this.firstName + ' ' + this.lastName;
    const nombreCompleto = `${this.firstName} ${this.lastName}`;
    this.logger.log(nombreCompleto);

    this.selected.emit({ name: nombreCompleto, role: this.role });
  }
}
