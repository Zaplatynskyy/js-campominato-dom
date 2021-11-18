// Consegna L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

const play = document.querySelector('.btn');

play.addEventListener("click",
    function() {
        const range = document.getElementById('level').value;
        let container = document.querySelector('.container_box');
        // svuoto il container_box
        container.innerHTML = '';
        
        let numBox = 0;
        let classBox = '';

        switch(range) {
            case '1':
                numBox = 100;
                classBox = 'easy';
                break;

            case '2':
                numBox = 81;
                classBox = 'hard';
                break;

            case '3':
                numBox = 49;
                classBox = 'extreme';
                break;
        } 

        for(let i = 1; i <= numBox; i++) {
            // assegno a newTag il valore della funzione
            const newTag = initNewElement(container, classBox, i);
            // ad ogni tag aggiungo il comando click
            newTag.addEventListener("click", 
                function() {
                    this.classList.add('lightblue');
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
    newTag.className = 'box';
    newTag.classList.add(classTag);
    newTag.appendChild(text);
    containerTag.appendChild(newTag);

    return newTag;
}

