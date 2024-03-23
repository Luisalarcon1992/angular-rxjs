import { fromEvent, map, tap } from "rxjs";


const txt = document.createElement('div');

txt.innerHTML = `
    
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo placeat accusantium distinctio soluta illum cupiditate nam magnam non. Asperiores deserunt earum alias sunt libero cum distinctio voluptate eum iste expedita?
<br></br>
Impedit, illo, voluptatem libero ducimus recusandae incidunt aperiam ea quis, tenetur id expedita est fugit qui quod nobis cumque consectetur magnam! Autem, optio numquam! Placeat similique optio officiis beatae magnam.
<br></br>
Omnis recusandae sint provident? Sint, nostrum? Neque, natus? Rem exercitationem optio qui, officiis eligendi, eos beatae cupiditate pariatur neque, ab repudiandae necessitatibus a libero? Voluptas dolorem ipsa rem possimus fugiat!
Iusto nobis cumque esse autem alias sed ex doloremque dignissimos? Nesciunt ad exercitationem sapiente cumque eum eligendi tempora, quaerat id neque rem ut inventore hic modi omnis nemo at iure.
<br></br>
Ratione odio, sit sed libero adipisci autem nostrum rerum nihil eligendi, dolore dolorem quo impedit nisi ducimus illum aut, quos officia dolorum debitis aspernatur! Soluta, neque eos! Soluta, a temporibus.
<br></br>
Hic commodi magni pariatur assumenda dicta sunt unde incidunt, optio consequatur dolorem at voluptate eaque modi maiores ullam sequi provident eligendi fugiat corrupti veritatis praesentium quidem! Praesentium at enim culpa.
<br></br>
Totam veritatis perferendis laudantium et? Placeat laborum aliquam iure! Ducimus, assumenda qui commodi officia aspernatur quaerat harum totam, adipisci perferendis veniam iusto eligendi incidunt impedit hic, vero cumque tenetur delectus.
<br></br>
Similique voluptas optio ut non sint unde, quas facilis odit cum itaque, iste dolorum ipsa? Optio distinctio, vero qui recusandae pariatur ipsam mollitia sed odit dolorum iste aliquid asperiores quas.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo placeat accusantium distinctio soluta illum cupiditate nam magnam non. Asperiores deserunt earum alias sunt libero cum distinctio voluptate eum iste expedita?
<br></br>
Impedit, illo, voluptatem libero ducimus recusandae incidunt aperiam ea quis, tenetur id expedita est fugit qui quod nobis cumque consectetur magnam! Autem, optio numquam! Placeat similique optio officiis beatae magnam.
<br></br>
Omnis recusandae sint provident? Sint, nostrum? Neque, natus? Rem exercitationem optio qui, officiis eligendi, eos beatae cupiditate pariatur neque, ab repudiandae necessitatibus a libero? Voluptas dolorem ipsa rem possimus fugiat!
Iusto nobis cumque esse autem alias sed ex doloremque dignissimos? Nesciunt ad exercitationem sapiente cumque eum eligendi tempora, quaerat id neque rem ut inventore hic modi omnis nemo at iure.
<br></br>
Ratione odio, sit sed libero adipisci autem nostrum rerum nihil eligendi, dolore dolorem quo impedit nisi ducimus illum aut, quos officia dolorum debitis aspernatur! Soluta, neque eos! Soluta, a temporibus.
<br></br>
Hic commodi magni pariatur assumenda dicta sunt unde incidunt, optio consequatur dolorem at voluptate eaque modi maiores ullam sequi provident eligendi fugiat corrupti veritatis praesentium quidem! Praesentium at enim culpa.
<br></br>
Totam veritatis perferendis laudantium et? Placeat laborum aliquam iure! Ducimus, assumenda qui commodi officia aspernatur quaerat harum totam, adipisci perferendis veniam iusto eligendi incidunt impedit hic, vero cumque tenetur delectus.
<br></br>
Similique voluptas optio ut non sint unde, quas facilis odit cum itaque, iste dolorum ipsa? Optio distinctio, vero qui recusandae pariatur ipsam mollitia sed odit dolorum iste aliquid asperiores quas.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo placeat accusantium distinctio soluta illum cupiditate nam magnam non. Asperiores deserunt earum alias sunt libero cum distinctio voluptate eum iste expedita?
<br></br>
Impedit, illo, voluptatem libero ducimus recusandae incidunt aperiam ea quis, tenetur id expedita est fugit qui quod nobis cumque consectetur magnam! Autem, optio numquam! Placeat similique optio officiis beatae magnam.
<br></br>
Omnis recusandae sint provident? Sint, nostrum? Neque, natus? Rem exercitationem optio qui, officiis eligendi, eos beatae cupiditate pariatur neque, ab repudiandae necessitatibus a libero? Voluptas dolorem ipsa rem possimus fugiat!
Iusto nobis cumque esse autem alias sed ex doloremque dignissimos? Nesciunt ad exercitationem sapiente cumque eum eligendi tempora, quaerat id neque rem ut inventore hic modi omnis nemo at iure.
<br></br>
Ratione odio, sit sed libero adipisci autem nostrum rerum nihil eligendi, dolore dolorem quo impedit nisi ducimus illum aut, quos officia dolorum debitis aspernatur! Soluta, neque eos! Soluta, a temporibus.
<br></br>
Hic commodi magni pariatur assumenda dicta sunt unde incidunt, optio consequatur dolorem at voluptate eaque modi maiores ullam sequi provident eligendi fugiat corrupti veritatis praesentium quidem! Praesentium at enim culpa.
<br></br>
Totam veritatis perferendis laudantium et? Placeat laborum aliquam iure! Ducimus, assumenda qui commodi officia aspernatur quaerat harum totam, adipisci perferendis veniam iusto eligendi incidunt impedit hic, vero cumque tenetur delectus.
<br></br>
Similique voluptas optio ut non sint unde, quas facilis odit cum itaque, iste dolorum ipsa? Optio distinctio, vero qui recusandae pariatur ipsam mollitia sed odit dolorum iste aliquid asperiores quas.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo placeat accusantium distinctio soluta illum cupiditate nam magnam non. Asperiores deserunt earum alias sunt libero cum distinctio voluptate eum iste expedita?
<br></br>
Impedit, illo, voluptatem libero ducimus recusandae incidunt aperiam ea quis, tenetur id expedita est fugit qui quod nobis cumque consectetur magnam! Autem, optio numquam! Placeat similique optio officiis beatae magnam.
<br></br>
Omnis recusandae sint provident? Sint, nostrum? Neque, natus? Rem exercitationem optio qui, officiis eligendi, eos beatae cupiditate pariatur neque, ab repudiandae necessitatibus a libero? Voluptas dolorem ipsa rem possimus fugiat!
Iusto nobis cumque esse autem alias sed ex doloremque dignissimos? Nesciunt ad exercitationem sapiente cumque eum eligendi tempora, quaerat id neque rem ut inventore hic modi omnis nemo at iure.
<br></br>
Ratione odio, sit sed libero adipisci autem nostrum rerum nihil eligendi, dolore dolorem quo impedit nisi ducimus illum aut, quos officia dolorum debitis aspernatur! Soluta, neque eos! Soluta, a temporibus.
<br></br>
Hic commodi magni pariatur assumenda dicta sunt unde incidunt, optio consequatur dolorem at voluptate eaque modi maiores ullam sequi provident eligendi fugiat corrupti veritatis praesentium quidem! Praesentium at enim culpa.
<br></br>
Totam veritatis perferendis laudantium et? Placeat laborum aliquam iure! Ducimus, assumenda qui commodi officia aspernatur quaerat harum totam, adipisci perferendis veniam iusto eligendi incidunt impedit hic, vero cumque tenetur delectus.
<br></br>
Similique voluptas optio ut non sint unde, quas facilis odit cum itaque, iste dolorum ipsa? Optio distinctio, vero qui recusandae pariatur ipsam mollitia sed odit dolorum iste aliquid asperiores quas.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo placeat accusantium distinctio soluta illum cupiditate nam magnam non. Asperiores deserunt earum alias sunt libero cum distinctio voluptate eum iste expedita?
<br></br>
Impedit, illo, voluptatem libero ducimus recusandae incidunt aperiam ea quis, tenetur id expedita est fugit qui quod nobis cumque consectetur magnam! Autem, optio numquam! Placeat similique optio officiis beatae magnam.
<br></br>
Omnis recusandae sint provident? Sint, nostrum? Neque, natus? Rem exercitationem optio qui, officiis eligendi, eos beatae cupiditate pariatur neque, ab repudiandae necessitatibus a libero? Voluptas dolorem ipsa rem possimus fugiat!
Iusto nobis cumque esse autem alias sed ex doloremque dignissimos? Nesciunt ad exercitationem sapiente cumque eum eligendi tempora, quaerat id neque rem ut inventore hic modi omnis nemo at iure.
<br></br>
Ratione odio, sit sed libero adipisci autem nostrum rerum nihil eligendi, dolore dolorem quo impedit nisi ducimus illum aut, quos officia dolorum debitis aspernatur! Soluta, neque eos! Soluta, a temporibus.
<br></br>
Hic commodi magni pariatur assumenda dicta sunt unde incidunt, optio consequatur dolorem at voluptate eaque modi maiores ullam sequi provident eligendi fugiat corrupti veritatis praesentium quidem! Praesentium at enim culpa.
<br></br>
Totam veritatis perferendis laudantium et? Placeat laborum aliquam iure! Ducimus, assumenda qui commodi officia aspernatur quaerat harum totam, adipisci perferendis veniam iusto eligendi incidunt impedit hic, vero cumque tenetur delectus.
<br></br>
Similique voluptas optio ut non sint unde, quas facilis odit cum itaque, iste dolorum ipsa? Optio distinctio, vero qui recusandae pariatur ipsam mollitia sed odit dolorum iste aliquid asperiores quas.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo placeat accusantium distinctio soluta illum cupiditate nam magnam non. Asperiores deserunt earum alias sunt libero cum distinctio voluptate eum iste expedita?
<br></br>
Impedit, illo, voluptatem libero ducimus recusandae incidunt aperiam ea quis, tenetur id expedita est fugit qui quod nobis cumque consectetur magnam! Autem, optio numquam! Placeat similique optio officiis beatae magnam.
<br></br>
Omnis recusandae sint provident? Sint, nostrum? Neque, natus? Rem exercitationem optio qui, officiis eligendi, eos beatae cupiditate pariatur neque, ab repudiandae necessitatibus a libero? Voluptas dolorem ipsa rem possimus fugiat!
Iusto nobis cumque esse autem alias sed ex doloremque dignissimos? Nesciunt ad exercitationem sapiente cumque eum eligendi tempora, quaerat id neque rem ut inventore hic modi omnis nemo at iure.
<br></br>
Ratione odio, sit sed libero adipisci autem nostrum rerum nihil eligendi, dolore dolorem quo impedit nisi ducimus illum aut, quos officia dolorum debitis aspernatur! Soluta, neque eos! Soluta, a temporibus.
<br></br>
Hic commodi magni pariatur assumenda dicta sunt unde incidunt, optio consequatur dolorem at voluptate eaque modi maiores ullam sequi provident eligendi fugiat corrupti veritatis praesentium quidem! Praesentium at enim culpa.
<br></br>
Totam veritatis perferendis laudantium et? Placeat laborum aliquam iure! Ducimus, assumenda qui commodi officia aspernatur quaerat harum totam, adipisci perferendis veniam iusto eligendi incidunt impedit hic, vero cumque tenetur delectus.
<br></br>
Similique voluptas optio ut non sint unde, quas facilis odit cum itaque, iste dolorum ipsa? Optio distinctio, vero qui recusandae pariatur ipsam mollitia sed odit dolorum iste aliquid asperiores quas.


`

const body = document.querySelector('body');
body.append( txt );

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append( progressBar )

// funcion calculo para el scroll

const calcularPorcentajeScroll = (event ) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;

    return ((scrollTop /( scrollHeight - clientHeight)) * 100);
}


// Streams

const scroll$ = fromEvent( document, 'scroll' );


const progress$ = scroll$.pipe(
    map( calcularPorcentajeScroll ),
    tap( console.log )
);


progress$.subscribe(
    porcentaje => {
        progressBar.style.width = `${ porcentaje }%`
    }
)
