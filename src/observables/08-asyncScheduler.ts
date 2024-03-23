import { asyncScheduler } from 'rxjs';


// setTimeout(() => {}, 3000);


const saludar = ()=> console.log('hola');
const saludar2 = data => console.log(data);

// asyncScheduler.schedule(saludar, 2000);
// asyncScheduler.schedule(saludar, 2000, 'Data'); 
// Como 3 arg se pasa los datos que necesita la función
// Si es necesario mandar más de 1 arg se envía un objeto


const subs$ = asyncScheduler.schedule( function(state) {
    
    console.log('state', state);

    this.schedule(state + 1, 1000)

}, 1000, 0 )


// setTimeout(() => {    
//     subs$.unsubscribe();
// }, 5000);

asyncScheduler.schedule( () => subs$.unsubscribe(), 10000 )