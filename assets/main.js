/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
//addEventListener 
//ciclo for
//append
//CreateElement

Ogni cella ha un numero progressivo, da 1 a 100.


Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

let destination = document.querySelector(".griglia")
let quadratino
function mioElemento(){
    //variabile che indica la destinazion nell'html
    destination = document.querySelector(".griglia")
    
    for(i = 1; i <= 100; i++){
        //creo l'elemento che voglio vedere
        quadratino = document.createElement(`div`)
        //aggiungo la classe gia creata ad ogni elemento
        quadratino.classList.add("box")
        // quadratino.classList.add("different-color")
        console.log(quadratino)
        //visualizzo il mio elemtno in pagina
        destination.append(quadratino)
    }
    
}

console.log(mioElemento())
//creo la variabile per targhettizzare il mio elemento html
let button = document.querySelector("button")
//al click del mio bottone faccio apparire la griglia
button.addEventListener(`click`, function(){
    
    destination.classList.remove("display-none")
})

quadratino.addEventListener(`click`, function(){
    quadratino.classList.add("different-color")
})



