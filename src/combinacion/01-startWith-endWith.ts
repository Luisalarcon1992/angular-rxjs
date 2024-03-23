import { endWith, of, startWith } from "rxjs";

/* StartWith:
Antes de emitir el valor del observable, emitirá un elemento que pasemos como argumento

EndWith: 
Mismo caso anterior, solamente que este termina con el argumento enviado

El orden que se mande start o end no tiene relevaccia, dado que rx entederá en que momento se tiene que emitir cada uno

*/

const numeros$ = of(1,2,3).pipe(
    startWith('a'),
    endWith('b')
);

numeros$.subscribe(
    console.log
)