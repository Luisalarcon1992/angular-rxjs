 

/*ConcatMap
Emite observable, lo cual deja en cola los obs que se van emitiendo,
hasta que no finalice el obsr que está activo, no se emitirán los elementos del obs que está en cola
*/
import { concatMap, fromEvent, interval, switchMap, take } from "rxjs";

 

const interval$ = interval(500).pipe( take(3));
const click$ = fromEvent( document, 'click');

click$.pipe(
    concatMap( () => interval$),
).subscribe( console.log )