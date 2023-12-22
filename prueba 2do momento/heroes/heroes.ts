// src/heroes/heroe.ts
import { Habilidades } from '../enums/habilidades';

export interface Heroe {
  nombre: string;
  atacar(): string;
  usarHabilidadEspeciales(): string;
  combatir(): string;
}
