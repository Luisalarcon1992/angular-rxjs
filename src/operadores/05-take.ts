
import { of, take } from 'rxjs';

/*
Take: Cuando quieres limitar la cantidad de emisiones que un observable puede tener
 y cancela la emisión del observable
*/


const numeros$ = of(1,2,3,4,5)

numeros$.pipe(  
    take(3)
)
.subscribe({
    next: valor => console.log('next: ', valor),
    complete: ()=> console.log('fin')
})