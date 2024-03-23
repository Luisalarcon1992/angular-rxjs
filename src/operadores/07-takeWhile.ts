import { fromEvent, map, takeWhile } from "rxjs";

/*TakeWhile:
Emite una salida siempre y cuando el elemento cumpla la condición

*/

const click$ = fromEvent<MouseEvent>( document, 'click');

click$.
pipe(
    map( ({ x, y}) => ({x, y})),
    // takeWhile( ( { y }) => y <= 80 ) // Si se deja así, no emite el valor que rompa la condición
    takeWhile( ( { y }) => y >= 300, true) // si pasamos 'true', devuelve el último valor que hizo cortar la emisión
)
.subscribe(
    {
        next: valor => console.log('next: ', valor),
        complete: () => console.log('Fin')
    }
)