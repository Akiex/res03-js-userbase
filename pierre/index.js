let main = document.querySelector('main');
let gameTable = document.createElement('div');

// Création des images
let rock = document.createElement('img');
rock.src = 'assets/rock.svg';
rock.alt = 'Pierre';

let paper = document.createElement('img');
paper.src = 'assets/paper.svg';
paper.alt = 'Papier';

let scissor = document.createElement('img');  // Correction de scisor à scissor
scissor.src = 'assets/scissor.svg';
scissor.alt = 'Ciseaux';

// Choix aléatoire de l'ordinateur
let ia = Math.floor(Math.random() * 3) + 1;
if (ia === 1) {
    ia = 'pierre';
    gameTable.appendChild(rock);
    rock.style.width = '50px';
    rock.style.gap = '1em';
    rock.style.backgroundColor = 'red'
} else if (ia === 2) {
    ia = 'feuille';
    gameTable.appendChild(paper);
    paper.style.width = '50px';
    paper.style.gap = '1em';
    paper.style.backgroundColor = 'red'
} else {
    ia = 'ciseaux';
    gameTable.appendChild(scissor);
    scissor.style.width = '50px';
    scissor.style.gap = '1em';
    scissor.style.backgroundColor = 'red'
}


let user = prompt('Pierre, feuille, ciseaux').toLowerCase();

main.appendChild(gameTable);


if (user !== 'pierre' && user !== 'feuille' && user !== 'ciseaux') {
    gameTable.textContent = 'Choix invalide, veuillez entrer "pierre", "feuille" ou "ciseaux".';
} else {

    if (user === "pierre") {
        gameTable.appendChild(rock);
        rock.style.width = '50px';
        rock.style.gap = '1em';
        rock.style.backgroundColor = 'blue'
    } else if (user === "feuille") {
        gameTable.appendChild(paper);
        paper.style.width = '50px';
        paper.style.gap = '1em';
        paper.style.backgroundColor = 'blue'
    } else if (user === "ciseaux") {
        gameTable.appendChild(scissor);
        scissor.style.width = '50px';
        scissor.style.gap = '1em';
        scissor.style.backgroundColor = 'blue'
    }

   
    let resultMessage = '';
    if (user === ia) {
        resultMessage = 'Match nul';
    } else if (
        (user === 'pierre' && ia === 'ciseaux') ||
        (user === 'feuille' && ia === 'pierre') ||
        (user === 'ciseaux' && ia === 'feuille')
    ) {
        resultMessage = 'Vous avez gagné !';
    } else {
        resultMessage = 'Vous avez perdu !';
    }


    let resultElement = document.createElement('p');
    resultElement.textContent = resultMessage;
    gameTable.appendChild(resultElement);
    
}
