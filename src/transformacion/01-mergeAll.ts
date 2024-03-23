import { Observable, debounceTime, fromEvent, map, mergeAll, pluck } from "rxjs";
import { ajax } from 'rxjs/ajax'
import { IData } from "../interface/data";
import { IMultiData, Item } from "../interface/multiData";

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append( textInput, orderList )


const mostrarDatos = ( users: Item[]) => {
    console.log(users);
    orderList.innerHTML = '';

    for ( let user of users ){
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = user.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.text = 'Ver Sitio Web';
        anchor.target = '_blank';

        li.append( img );
        li.append( user.login + '');
        li.append( anchor );
        
        orderList.append(li);

    }

}

const input$ = fromEvent<KeyboardEvent>( document, 'keyup');

// Para obtener un solo dato, cree una Interfaz con la respuesta
// y así poder tipar los datos para usarlo dentro del map
// input$.pipe(
//     debounceTime(500),
//     map( event => {
//         const text = event.target['value'];
        
//         return ajax.getJSON<IData>(
//             `https://api.github.com/users/${text}`
//         )
//     })
// )
// .subscribe( res => {
//     res.pipe(
//         map( x => { return {
//             data : x.created_at,
//             data1 : x.repos_url,
//             data2 : x.name}
//         }  )
//     ).subscribe( console.log )
// })

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>( x => x.target['value']),
    map<string, Observable<IMultiData>>( text => ajax.getJSON(
        `https://api.github.com/search/users?q=${text}`
        )),
    mergeAll(),
    map( x => x.items)
)
.subscribe( mostrarDatos )