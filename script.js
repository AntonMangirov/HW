const appElement = document.querySelector('.app');

const appSize = document.querySelector('.boxSize');
const appSizeStart = document.querySelector('.boxSizeEnter');


let stringFromStorage = localStorage.getItem('tikToeField'); // получил данные в виде строки

let field = [
    [null, null, null], // [0][0]   [0][1]   [0][2]
    [null, null, null], // [1][0]   [1][1]   [1][2]
    [null, null, null]  // [2][0]   [2][1]   [2][2]
];

if (stringFromStorage !== null) {
    field = JSON.parse(stringFromStorage);
}

let size = Number('.boxSize');


appElement.innerHTML = drawField(size);

appElement.addEventListener('click', setStep);

let stepNumber = 0;

function setStep(event) {

    const i = Number(event.target.dataset.i);
    const j = Number(event.target.dataset.j);

    if (field[i][j] !== null) {
        return;
    }

    let currentPlayer;

    if (stepNumber % 2 === 0) {
        currentPlayer = '0';
    } else {
        currentPlayer = 'x';
    }

    stepNumber++;

    document.querySelector(`[data-i="${i}"][data-j="${j}"]`).innerHTML = currentPlayer;
    field[i][j] = currentPlayer;

    localStorage.setItem('tikToeField', JSON.stringify(field));
}



appSizeStart.addEventListener('click', appStart);

function appStart(event) {
    function drawField(size) {
        let fieldHtmlString = '';
        for (let i = 0; i < size; i++) {
            fieldHtmlString += `<div class="row">`;
            for (let j = 0; j < size; j++) {
    
                let currentSymbol = '';
    
                if (field[i][j] !== null) {
                    currentSymbol = field[i][j];
                }
    
                fieldHtmlString += `
                    <div
                      class="cell"
                      data-i="${i}"
                      data-j="${j}"
                      >
                      ${currentSymbol}
                    </div>`;
            }
            fieldHtmlString += `</div>`;
        }
        return fieldHtmlString;
    }
};


