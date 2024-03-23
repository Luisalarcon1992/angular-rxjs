import { catchError, fromEvent, map, mergeMap, of, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";


const httpGet = ( userPass ) => 
ajax.post('https://reqres.in/api/login?delay=1', userPass).pipe(
    map( x => x.response ),
    catchError( error => of('xxx'))
)



const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPassword = document.createElement('input');
const submitBtn = document.createElement('button');

inputEmail.type= 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'george.bluth@reqres.in';

inputPassword.type = 'password';
inputPassword.placeholder = 'Contraseña';
inputPassword.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';


form.append( inputEmail, inputPassword, submitBtn);

document.querySelector('body').append(form);

const submitForm$ = fromEvent<SubmitEvent>( form, 'submit' ).pipe(
    tap( event => event.preventDefault()),
    map( event => ({
        email: event.target[0].value,
        password: event.target[1].value
    })),
    switchMap( httpGet)
);


submitForm$.subscribe( console.log )