// src/heroes/vegeta.ts
import { Personajes } from '../enums/personajes';
import { Heroe } from './heroes';

export class Vegeta implements Heroe {
  nombre = Personajes.VEGETA;

  atacar(): string {
    return `${this.nombre} realiza usa su tecnica el Big Bang Attack.`;
  }

  usarHabilidadEspeciales(): string {
    return `${this.nombre} utiliza su habilidad especial resplandor final.`;
  }

  combatir(): string {
    return `${this.nombre} está en combate se enfurece y se convierte en super sayajin 2 y derrota a Goku con el Galick Gun.`;
  }
}
