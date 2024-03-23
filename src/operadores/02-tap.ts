import { map, range, tap } from "rxjs";

/*
Tap: Permite emitir efectos secundarios, el return es ignorado
imprimer en consola por ejemplo o emitir alguna acción cuando sea emitido con algún dato en especial
*/

const numeros$ = range(1, 5)

numeros$
.pipe(
    tap( x => console.log('inicia el tap: ', x) ),
    map( valor => valor * 10 ),
    tap( {
        next: valor => console.log('después del map: ', valor),
        complete: () => console.log('Finalizado')
    })
)
.subscribe( val => console.log('subs: ', val))