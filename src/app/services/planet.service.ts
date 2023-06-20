import { Injectable } from '@angular/core';
import { Planet, PlanetDto } from '../domain/planet';
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
      .get<DataPage<PlanetDto>>(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(
        //pipe añade transformador de datos
        map((resp) => {
          return resp.results.map((dto) => toPlanet(dto));
        })
      );
  }
}
function toPlanet(dto: PlanetDto): Planet {
  return {
    name: dto.name,
    climate: dto.climate,
    terrain: dto.terrain,
    residents: dto.residents,
    films: dto.films,
    url: dto.url,
    rotationPeriod: parseInt(dto.rotation_period, 10),
    population: parseInt(dto.population, 10),
    orbitalPeriod: parseInt(dto.orbital_period, 10),
    gravity: parseInt(dto.gravity, 10),
    surfaceWater: parseInt(dto.surface_water, 10),
    diameter: parseInt(dto.diameter, 10),
    created: new Date(dto.created),
    edited: new Date(dto.edited),
  } as Planet;
}
