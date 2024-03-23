import { fromEvent, interval, mergeMap, of, take, takeUntil } from "rxjs";

/*MergeMap:
Hace una iteración por cada elemento del observable original,
En este ejemplo, hará 4 emisiones dado que hay 4 letras en el observable of()
*/

const letras$ = of('a', 'b', 'c', 'd');

letras$.pipe(
    mergeMap(( letras ) => interval(1000).pipe(
        take(3),
    )),
// ).subscribe(
//     {
//         next: ( valor) => console.log('valor: ', valor),
//         complete: () => console.log('fin'),
//     }
)

const mouseDown$ = fromEvent( document, 'mousedown');
const mouseUp$ = fromEvent( document, 'mouseup');
const interval$ = interval();


mouseDown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil( mouseUp$ )
    ))
).subscribe( console.log );