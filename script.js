const divBoard =  document.querySelector(".gameBoard");

const ticTacGame = (() => {

    const arrX = [];
    const arrO = [];
    let winner = 0;
    //
    const winCombos = [
        [0,1,2],
        [0,3,6],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [0,4,8]
    ];
    //
    const showBoard = function(){
        const form = document.querySelector(".form")
        form.classList.toggle("hidden")
    }
    //
    const createBoard = function(){
        const rowWidth = 3;
        const columnNumb = 9;
        
        for (let x = 0; x < rowWidth; x++) {
            for (let y = 0; y < columnNumb / rowWidth; y++) {
            const divSquare = document.createElement("div")
            divBoard.appendChild(divSquare)
            }
        }
    };
    //
    const playerCreation = (name, sign) =>{
        return {name, sign}
    };
    //
    const player1 = playerCreation("Player1","X");
    const player2 = playerCreation("Player2","O");
    let turnCounter = 0;
    //
    const playerMove = function(squareClicked, indexSquare){
        if(turnCounter % 2 === 0){
            squareClicked.textContent = player1.sign
            arrX[indexSquare] = indexSquare
        }
        else if (turnCounter % 2 === 1){
            squareClicked.textContent = player2.sign
            arrO[indexSquare] = indexSquare
        }
        turnCounter++;
    };
    //
    const checkWinner = function (){
        
        let winCondCheck = (arr1, arr2) => arr2.every((element) => arr1.includes(element))

        for (let i = 0; i<winCombos.length; i++){
            if(winCondCheck(arrX, winCombos[i])){
                console.log("Player 1 Wins")
                winner = 1;
            }
            if(winCondCheck(arrO, winCombos[i])){
                console.log("Player 2 Wins")
                winner = 1;
            }
        }
    };
    //
    const playGame = function(){
        showBoard();
        createBoard();
        divBoard.addEventListener("click", e =>{
            const indexSquare = Array.from(e.target.parentNode.children).indexOf(e.target);
            const squareClicked = divBoard.children[indexSquare]
            if (squareClicked.textContent === "" && winner === 0){
                playerMove(squareClicked, indexSquare)
                checkWinner()
            }
        })
    };
    //
    return {playGame}
})();