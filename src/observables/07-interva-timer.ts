import { timer, interval } from 'rxjs';

/* Inerval
Se obtiene una sencuencia de números infinita, con un intervalo que se lo pasa como parámetro
Aunque se cancele el unsucribe del interval, seguirá emitiendo, pero hay otros métodos para poder cancelar
Siempre inicia en cero por defecto
Es asíncronos
*/

/* Timer 
Es lo opuesto, dado que se le pasa el argumento, luego de ese tiempo se emite el valor y se cancela
*/


const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('fin'),
}


const interval$ = interval(1000);
// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000); //1er arg es el tiempo de espera, 2do arg cada cuento emite


const timer$ = timer(2000);


// interval$.subscribe( observer );
// timer$.subscribe( observer );
