import { Injectable } from '@angular/core';
import { Planet } from '../domain/planet';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { DataPage } from '../domain/data-page';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  constructor(private http: HttpClient) {}

  /** Devuelve un listado de planetas (página N) */
  getPlanets(n: number = 1): Observable<Planet[]> {
    const url = `https://swapi.dev/api/planets/?page=${n}`;

    return this.http
      .get<DataPage<Planet>>(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(
        //pipe añade transformador de datos
        map((resp) => {
          return resp.results;
        })
      );
  }
}
