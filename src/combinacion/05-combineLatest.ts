import { combineLatest, fromEvent, map, merge } from "rxjs";

/* CombineLatest:
Recibe observables y emite un nuevo observables, que sale un arreglo 
combinación de ambos observables que recibe en el argumento
*/

// const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');
// const click$ = fromEvent<MouseEvent>( document, 'click');

// combineLatest(
//     keyup$.pipe( map(x => x.type)), 
//     click$.pipe( map(x => x.type))
// ).subscribe( console.log )

const input1 = document.createElement('input');
const input2 = document.createElement('input');


input1.placeholder = 'email@mail.com';

input2.placeholder = '*********';
input2.type = 'password';

document.querySelector('body').append( input1, input2);

const getInputStream = ( element: HTMLElement) =>
    fromEvent<KeyboardEvent>( element, 'keyup').pipe(
        map(x => x.target['value']))

combineLatest( getInputStream(input1), getInputStream(input2))
.subscribe( console.log )