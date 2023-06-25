/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { PlanetListComponent } from './planet-list.component';
import { Observable, from } from 'rxjs';
import { Planet } from 'src/app/domain/planet';
import { PlanetService } from 'src/app/services/planet.service';

class PlanetServiceMock {
  getPlanets(): Observable<Planet[]> {
    return from([]);
  }
  getPlanet(id: number) {}
}

describe('PlanetListComponent', () => {
  let component: PlanetListComponent;
  let fixture: ComponentFixture<PlanetListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanetListComponent],
      providers: [
        { provide: PlanetService, useClass: PlanetServiceMock },
        { provide: HttpClient, useClass: HttpClient }
      ]
    });
    fixture = TestBed.createComponent(PlanetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
