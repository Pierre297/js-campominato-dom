/* L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100 10 * 10
con difficoltà 2 => tra 1 e 81 9 * 9
con difficoltà 3 => tra 1 e 49 7 * 7 
 */

// crea tre funzioni con cicli for in base al livello scelto dall'utente.

// ogni ciclo imposta alla griglia il numero di caselle associato al livello.

// con if/else if/else collegare i bottoni ed eseguire la funzione corrispondente al livello scelto.

// costanti griglia e bottoni
const gridContainer = document.getElementById("grid");
const gamemModeEasy = document.getElementById("easy-btn");
const gamemModeMedium = document.getElementById("medium-btn");
const gamemModeHard = document.getElementById("hard-btn");
const clickBox = document.getElementsByClassName("square-easy");
const gameOver = document.getElementById("game-over")
let gamemode;


// bottone gamemode easy
gamemModeEasy.addEventListener('click', function() {
    gamemode = 100;
    squareClass = "square-easy";
    genGrid();
    // display  none dei bottoni
     var element = document.getElementById("header");
     element.classList.add("button-none");
        
});

//bottone gamemode medium
gamemModeMedium.addEventListener('click', function() {
    gamemode = 81;
    squareClass = "square-medium";
    genGrid();
    // display  none dei bottoni
    var element = document.getElementById("header");
    element.classList.add("button-none");

});

//bottone gamemode hard
gamemModeHard.addEventListener('click', function() {
    gamemode = 49;
    squareClass = "square-hard";
    genGrid();
    // display  none dei bottoni
    var element = document.getElementById("header");
    element.classList.add("button-none");

});



// funzione creazione griglia
function genGrid(){

    for(let i = 1; i <= gamemode; i++){
        let node = document.createElement("div");
        node.classList.add(squareClass);
        node.setAttribute("id", i);
        
               
         node.addEventListener('click',
            function(){
                node.innerText = i;
                node.classList.add("clicked-true");
                let id = parseInt(node.id);
                if(bombList.includes(id)){
                    node.classList.add("clicked-bomb");
                    gameOver.innerHTML = '<h2>GAME OVER</h2> <p>Try again</p>'
                    console.log('hai perso');
                }
                
            }
        )
            gridContainer.appendChild(node);
    }


    // il computer deve generare 16 caselle casuali all'interno della griglia che rappresenteranno le bombe
    // -generazione bombe-----------------------------------------------------------------------------------------------------------------------------------
    const bombList = [];

    while (bombList.length < 16) {
    const num = Math.floor(Math.random() * gamemode) + 1;

    let duplicateNum = true;

    for (i = 0; i < bombList.length; i ++) {
        if(num === bombList[i]){
            duplicateNum = false;
        }
    }
    if (duplicateNum == true){
        bombList.push(num);
       }

    }

    console.log(bombList);
    // -fine generazione bombe-----------------------------------------------------------------------------------------------------------------------------------
    
};



// i numeri corrisspondenti alle bombe dovranno essere inseriti in un array

// se l'utente clicca su una bomba il gioco finisce e verranno visualizzate tutte le altre bombe
