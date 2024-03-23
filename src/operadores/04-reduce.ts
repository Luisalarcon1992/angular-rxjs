

/*
Es aplicar una función acumuladora a las funciones producidas por el observable
hasta que se complete el observable
*/

import { interval, reduce, take } from "rxjs";

const numbers = [1,2,3,4,5];

const totalReducer =  ( acumulador: number, valorActual: number ) => {
    return acumulador + valorActual 
}

const total = numbers.reduce(totalReducer)

console.log({total})

interval(1000)
.pipe(
    take(3),
    reduce(totalReducer)
)
.subscribe({
    next: valor=> console.log('Next: ', valor),
    complete: ()=> console.log('Fin')}
)
