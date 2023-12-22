// src/heroes/goku.ts
import { Personajes} from '../enums/personajes';
import { Heroe } from './heroes';

export class Goku implements Heroe {
  nombre = Personajes.GOKU;

  atacar(): string {
    return `${this.nombre} realiza un ultra genkidama.`;
  }

  usarHabilidadEspeciales(): string {
    return `${this.nombre} utiliza su habilidad especial el KAME KAME HAAAA.`;
  }

  combatir(): string {
    return `${this.nombre} está en combate se transforma en super sayajin 2 pero es derrotado por el principe de los sayajin VEGETA.`;
  }
}
