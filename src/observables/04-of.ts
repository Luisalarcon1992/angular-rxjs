import { of } from 'rxjs';


const obs$ = of(1, 2, 3, 4, 5, 6)

// of trata todos los argumentos de manera secuencia
obs$.subscribe( next => console.log('nex: ', next),
 null,
 () => console.log('Fin secuencia')
)