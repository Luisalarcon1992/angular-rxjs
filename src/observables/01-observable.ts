import { Observable, Observer  } from "rxjs";


const observer: Observer<any> = {
    next: value => console.log('Siguiente [next]:', value),
    error: error => console.warn('Error [obs]: ', error),
    complete: () => console.info('Completo [obs]'),
};

const obs$ = new Observable<string> ( subs => {

    subs.next('1')
    subs.next('2')
    subs.next('3')

    subs.complete() // finaliza el ciclo de emisión de evento
 
    subs.next('4') // este evento ya no será emitido
})


//obs$.subscribe( res => console.log(res)) // output: 1, 2, 3


// dentro del suscibe se puede enviar 3 call backs, el next, el error y un complete
// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.warn('error',error), // en este caso, no hay error, pero se podría forzar a un error de js
//     () => console.info('completado')
// )

obs$.subscribe( observer );