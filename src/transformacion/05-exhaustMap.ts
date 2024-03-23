/*ExhaustMap:
Emite un observable, cuando el sorurce emite un nuevo elemento, si hay un obs ejecutándose,
lo cancela, es decir, solo hay una suscripción activa.
*/

import { exhaustMap, fromEvent, interval, take } from "rxjs";

 

const interval$ = interval(500).pipe( take(3));
const click$ = fromEvent( document, 'click');

click$.pipe(
    exhaustMap( () => interval$),
).subscribe( console.log )