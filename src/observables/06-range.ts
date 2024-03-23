import { asyncScheduler, of, range } from 'rxjs';


/*
Crea un observable que emite una secuencia de números
en base aun rango, por defecto son síncronos
*/

const src$ = of(1,2,3,4,5);


src$.subscribe( console.log );

// por defecto es sinc, pero si agregamos asyncScheduler lo transformamos a asíncrono
const range$ = range(0,5, asyncScheduler);

console.log('inicio')
range$.subscribe( console.log )
console.log('fin')
