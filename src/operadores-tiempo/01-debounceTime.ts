import { debounceTime, distinctUntilChanged, from, fromEvent, map, takeUntil } from "rxjs";


const clicks$ = fromEvent( document, 'click');

clicks$.pipe(
    debounceTime(3000)
).
subscribe( console.log )

const input = document.createElement('input')

document.querySelector('body').append( input )


const data$ = fromEvent<KeyboardEvent>( input, 'keyup');

data$.pipe(
    debounceTime(1000), // crear un lapso de tiempo para que emita el valor,
    map( event => (event.target as HTMLInputElement).value ),
    distinctUntilChanged()
).
subscribe( console.log )