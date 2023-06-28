import { Pipe, PipeTransform } from '@angular/core';
import { Planet } from '../domain/planet';

@Pipe({
  name: 'filterPlanet'
})
export class FilterPlanetPipe implements PipeTransform {
  transform(planets: Planet[], searchString: string): Planet[] {
    if (!planets) {
      return [];
    }

    if (!searchString) {
      return planets;
    }
    searchString = searchString.toLocaleLowerCase().trim();

    // return planets.filter((p) => {
    //   p.name.toLowerCase().includes(searchString);
    // });
    // Equivalente

    return planets.filter((p) => p.name.toLowerCase().includes(searchString));
  }
}
