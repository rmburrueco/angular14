export interface PlanetDto {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface Planet {
  name: string;
  rotationPeriod: number;
  orbitalPeriod: number;
  diameter: number;
  climate: string;
  gravity: number;
  terrain: string;
  surfaceWater: number;
  population: number;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}
