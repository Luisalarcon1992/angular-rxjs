import { filter, from, fromEvent, map, Subject } from 'rxjs'

interface Personaje {
    tipo: string,
    nombre: string
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin',
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
]

from( personajes ).pipe(
    filter( p => p.tipo === 'heroe' )
). subscribe( console.log )

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup')
.pipe(
    map( event => event.code ),
    filter( code => code === 'Enter')
);

keyup$.subscribe( console.log )