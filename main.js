
const gameBoard = function (){

    const cells = document.querySelectorAll('.box');
    const restart = document.querySelector('#restart');
    const board = ['','','','','','','','','',];

const Player = function(name, marker){
    return {
        name,
        marker
    }
}

const playerCreate = function(){
        const playerX = Player('P1', 'X');
        const playerO = Player('P2', 'O');

        return{playerX, playerO};
}();

const players = playerCreate;
let currentPlayer = players.playerX;

const playerTurn = function (i){
    if(board[i]=== ''){
        board[i] = currentPlayer.marker;
        cells[i].textContent = currentPlayer.marker;


        if (checkWin(currentPlayer.marker)) {
            alert(currentPlayer.name + ' wins!');
            reset();
            return;
        } else if (board.every(cell => cell !== '')) { //checking if all the cells arent empty return draw!
            alert('draw!');
            reset();
            return;
        }

        if(currentPlayer=== players.playerX){   //for switching players
            currentPlayer = players.playerO;
        }
        else{
            currentPlayer = players.playerX;
        }
    }

}
const checkWin = function(marker){
    for(let i=0 ; i<winningCombos.length; i++){ //comparing the array with the winning combos
        const [a,b,c] = winningCombos[i];       //destructuring array and assinging each cell to either a b or c
        if(board[a]=== marker && board[b]=== marker && board[c]=== marker){
            return true;
        }
    }
    return false;
}


const reset = function(){
    restart.addEventListener('click',function(){
        for(let i=0; i<board.length; i++){
            board[i] = '';
            cells[i].textContent = '';
        }
    })
}
const winningCombos = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];


const checkCell = function (){
    for(let i=0; i<cells.length;i++){
        cells[i].addEventListener('click', function(){
            playerTurn(i);
        })
    }
};

reset();
checkCell();
}();
