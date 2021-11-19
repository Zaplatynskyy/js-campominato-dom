// Consegna L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su ogni cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle. La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.

const play = document.querySelector('.btn');

play.addEventListener("click",
    function() {
        const range = document.getElementById('level').value;
        let container = document.querySelector('.container_box');
        container.classList.remove('disable');
        // svuoto il container_box
        container.innerHTML = '';
        
        let numBox = 0;
        let classBox = 'box ';

        // switch che determina il numero degli elementi che avrà il nostro campo e la classe assogiata agli elementi, in base alla difficoltà scelta
        switch(range) {
            case '1':
                numBox = 100;
                classBox += 'easy';
                break;

            case '2':
                numBox = 81;
                classBox += 'hard';
                break;

            case '3':
                numBox = 49;
                classBox += 'extreme';
                break;
        } 

        // creo un array di bombe con 16 numeri casuali diversi tra loro
        const arrayBomb = [];
        while (arrayBomb.length < 16) {
            const numBomb = randomNum(1, numBox);
            if(!arrayBomb.includes(numBomb)) {
                arrayBomb.push(numBomb);
            }
        }

        let contatore = 0;
        // ciclo for per creare gli elementi all'interno del nostro DOM
        for(let i = 1; i <= numBox; i++) {
            
            // assegno a newTag il valore della funzione
            const newTag = initNewElement(container, classBox, i);
            // ad ogni tag aggiungo il comando click che si colora di rosso se il numero della casella è presente nell'array bomb, altrimenti di azzurro
            newTag.addEventListener("click", 
                function() {
                    // se clicco su un cobbone contenente la bomba, si attivano tutte le bombe(funzione1) e compare un messazzio di fine partita(funzione 2)
                    if(arrayBomb.includes(i)) {
                        const endClass = 'end_text';
                        const textEndGame = `
                            La partita è terminata. Numero tentativi riusciti : ${contatore}
                        `;
                        findBomb(arrayBomb, numBox, container);
                        initNewElement(container, endClass, textEndGame);
                    } else {
                        // altrimenti se non è una cella bomba, aggiunge classe che colora la cella ed incremento il contatore dei tentativi riusciti
                        this.classList.add('lightblue'); 
                        contatore++;                       
                    }
                }
            );
        } 
    }
);


// *****FUNZIONI******

// funzione che crea un nuovo tag div, al quale passiamo il testo interno (innerTag), assegnamo una certa classe(classTag) ed infine lo inseriamo dentro ad un container (containerTag). Infine tale funzione restituisce l'elemento newTag
function initNewElement(containerTag, classTag, innerTag) {
    const newTag = document.createElement('div');
    const text = document.createTextNode(innerTag);
    newTag.className = classTag;
    newTag.appendChild(text);
    containerTag.appendChild(newTag);

    return newTag;
}

// funzione che mi restituisce un numero casuale tra num1 e num2
function randomNum (num1, num2) {
    return Math.floor(Math.random() * (num2 - num1 + 1) + num1);
}

// funzione che si attiva al click dell'elemento associato e colora tutte le bombe di rosso aggiungendo la classe boom
function findBomb(array, numElementi, container) {
    for(let i = 1; i <= numElementi; i++) {
        if (array.includes(i)) {
            const elemento = document.getElementsByClassName('box');
            elemento[i - 1].classList.add('boom'); // messo i - 1 in quanto l'array elemento parte da 0 a 15 (che coincidono con gli elementi dell'array bombe)
        }
    }   

    container.classList.add('disable');
}
