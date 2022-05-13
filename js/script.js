// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata

const easyGame = document.querySelector(".easy_b");
console.log(easyGame);
const midGame = document.querySelector(".mid_b");
console.log(midGame);

const hardGame = document.querySelector(".hard_b");
const gridEl = document.getElementById("grid");


easyGame.addEventListener("click", 

    function() {
        const myNewArrRandom = createRandUniqueNumArr(100, 1, 100);
        console.log(myNewArrRandom);

        for (let i = 0; i < myNewArrRandom.length; i++) {

            const createMyElement = () => {
                const node = document.createElement("div");
                node.className = "square_easy";
                return node;
            }
            const divEl = createMyElement();
    
            let arrItem = myNewArrRandom[i];
    
            divEl.append(arrItem);  
    
            divEl.addEventListener("click", 
                function () {
                    console.log(this);
                    this.classList.add("clicked");
                }
            
            )
    
            gridEl.append(divEl);
            
        }
    }
)





// funzione che pusha numeri che scegli te da un min ad un max sempre diversi nell'array della dimensione che dai te
function createRandUniqueNumArr(numItems, min, max) {
    const arrInt = [];
    while (arrInt.length < numItems) {
        let randNumInt = getRandomNumMinMax(min, max);
        if(!arrInt.includes(randNumInt)){
            arrInt.push(randNumInt);
        }
    }
    return arrInt;
}


// funzione che crea un numero random
function getRandomNumMinMax(rangeMin, rangeMax) {
    let result = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;

    return result;
}


// funzione che controlla se un numero è pari o dispari
// function pariODispari(numeroCheck) {
//     // ritorna una stringa "pari" se il numero passato è pariODispari, sennò dispari
//     let risultato;
//     if (numeroCheck % 2 === 0) {
//         risultato = "pari";
//     } else {
//         risultato = "dispari";
//     }
//     return risultato;
// }