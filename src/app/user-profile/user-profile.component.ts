import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

export interface User {
  name: string;
  role: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  firstName: string = '';
  @Input()
  lastName: string = '';
  @Input()
  role: string = '';

  @Output()
  selected = new EventEmitter<User>();

  constructor() {
    console.log('1. userProfile. constructor');
  }

  ngOnInit(): void {
    console.log('2. userProfile. OnInit');
  }

  ngOnDestroy(): void {
    console.log('3. userProfile. OnDestroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  seleccionar() {
    //const nombreCompleto = this.firstName + ' ' + this.lastName;
    const nombreCompleto = `${this.firstName} ${this.lastName}`;
    console.log(nombreCompleto);

    this.selected.emit({ name: nombreCompleto, role: this.role });
  }
}
