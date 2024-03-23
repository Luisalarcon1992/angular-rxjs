import { Observable, Observer  } from "rxjs";


const observer: Observer<any> = {
    next: value => console.log('Next', value),
    error: error => console.warn('Error', error),
    complete: () => console.info('Completo'),
};



const intervalo$ = new Observable<number>( subscriber => {

    let contador = 0;
    const interval = setInterval( () => {
        contador ++
        subscriber.next( contador )
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    //acá inicia un procedimiento que quiero hacer cuando hacen unsuscribe
    return () => {
        clearInterval( interval );

    }
})

// cuando se suscribe, crea una suscripción es decir, una nueva instancia del observable
const subscription = intervalo$.subscribe( 
    num => console.log( 'Num:', num )
)

const subs1 = intervalo$.subscribe( observer );
const subs2 = intervalo$.subscribe( observer );
const subs3 = intervalo$.subscribe( observer );

// se puede concatener suscripciones, y al finalizar el primero finalizarán el resto
// solo en el subs1 mostará el () => complete
subs1.add( subs2 );
subs1.add( subs3 );

setTimeout( () => {

    subscription.unsubscribe();
}, 3000)