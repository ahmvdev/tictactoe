
const gameBoard = function (){

    const cells = document.querySelectorAll('.box');
    const restart = document.querySelector('#restart');
    const board = ['', '', '', '', '', '', '', '', ''];

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


const checkCell = function (){
    cells.forEach((index) =>{
        index.addEventListener('click', function(){
           console.log('button clicked');
        })
    }

    )
}();
}();
