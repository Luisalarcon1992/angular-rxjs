import { Observable, Observer, Subject  } from "rxjs";


const observer: Observer<any> = {
    next: value => console.log('Next', value),
    error: error => console.warn('Error', error),
    complete: () => console.info('Completo'),
};


const interval$ = new Observable<number>( subs => {
    
    const intervalID = setInterval( ()=> {
        subs.next(Math.random())
    }, 1000)

    return () => clearInterval( intervalID )

    /*
    Toda la data que está producida dentro del observable, es conocida como Cold Observable
    */
})


// const subs1 = interval$.subscribe( random => console.log('subs1', random) )
// const subs2 = interval$.subscribe( random => console.log('subs2', random) )

/*
 1- Muchas suscripciones van a estar atadas al mismo suscriber, es decir todo aquel que dependa
 del observable origianl, tendrán el mismo valor.
 2- También es un observer, es decir se le puede mandar el next, error, y complete
*/ 

const subjetc$ = new Subject();
const subscription = interval$.subscribe(subjetc$); // el intervalo sigue ejectuándose siempre, y en todo momento se tiene que llamar el unsuscribe, sino puede haber fuga de memoria

// acá ambos variables están atadas al mismo observable, por lo que ambos tendrán el mismo valor
const subs1 = subjetc$.subscribe( random => console.log('subs1', random) )
const subs2 = subjetc$.subscribe( random => console.log('subs2', random) )


setTimeout(() => {
    
    subjetc$.next(10); // este es conocido como hot observable, por que la data es producida por fuera del observervable
    subjetc$.complete()

    subscription.unsubscribe(); // Acá se elimina la instancia, por lo que el proceso del Observable deja de emitir valores

}, 3500);