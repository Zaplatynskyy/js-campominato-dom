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
            // creo il tag <div class="box extreme">i</div> e lo aggiungo al DOM
            const div = document.createElement('div');
            const text = document.createTextNode(i);
            div.className = 'box';
            div.classList.add(classBox);
            div.appendChild(text);
            container.appendChild(div);
            // ad ogni tag aggiungo il comando click
            div.addEventListener("click", 
                function() {
                    this.classList.add('lightblue');
                }
            );
        } 

    }
);

// *****FUNZIONI******



