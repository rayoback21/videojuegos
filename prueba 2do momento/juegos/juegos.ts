// src/juego.ts
import { Goku } from '../heroes/goku';
import { Vegeta } from '../heroes/vegeta';

const goku = new Goku();
const vegeta = new Vegeta();

console.log(`${goku.nombre} entra en la arena.`);
console.log(`${vegeta.nombre} entra en la arena.`);

console.log(goku.atacar());
console.log(vegeta.atacar());
console.log(goku.usarHabilidadEspeciales());
console.log(vegeta.usarHabilidadEspeciales());
console.log(goku.combatir());
console.log(vegeta.combatir());


console.log('¡Fin del juego!');
