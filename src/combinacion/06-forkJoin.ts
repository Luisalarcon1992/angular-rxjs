/* ForkJoin:
Puede recibir varios observables
Tienen que ser finitos, sino, el forkjoin no emitirá ningún valor
*/

import { catchError, delay, forkJoin, interval, of, take } from "rxjs";
import { ajax } from "rxjs/ajax";

const numeros$ = of(1,2,3,4,5);
const intervalo$ = interval(1000).pipe( take(3));
const letras$ = of('a','b','c').pipe( delay(3500))

forkJoin(
    [numeros$, intervalo$, letras$]
)//.subscribe( console.log )

const gitHubApi = 'https://api.github.com/users';
const gitHubUser = 'luisalarcon1992';

forkJoin(
    {
        usuario: ajax.getJSON(
            `${gitHubApi}/${gitHubUser}`
        ),
        repos: ajax.getJSON(
            `${gitHubApi}/${gitHubUser}asasd`
        ).pipe(
            catchError( err => of([])) // aunque de error, continuará ejecutándose los demás observables
        ),
        gists: ajax.getJSON(
            `${gitHubApi}/${gitHubUser}`
        ),

    }
).pipe(
    catchError( error => of(error.message))
).subscribe( console.log )