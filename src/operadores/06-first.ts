import { first, fromEvent, map, take } from "rxjs";

/* First
Toma el primer valor y devuelve,
Cuando emite el primer valor, si no tiene alguna parámetro, se completa el observable
Si hay alguna condición, se ejecutará hasta que esa condición se cumpla y finaliza el observable.
*/

const click$ = fromEvent<MouseEvent>( document, 'click');

click$.pipe(
    map( ({ clientY, clientX}) => (
        { clientX, clientY}
    )),
    first( event => event.clientY >= 150 )
).subscribe({
    next: valor => console.log('next: ', valor),
    complete: () => console.log('Fin')
})
