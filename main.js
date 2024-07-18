
const gameBoard = function (){

    const cells = document.querySelectorAll('.box');
    const restart = document.querySelector('#restart');
    const board = ['', '', '', '', '', '', '', '', ''];

const checkCell = function (){
    cells.forEach((index) =>{
        index.addEventListener('click', function(){
            console.log('cell clicked')
        })
    }

    )
}();
}();
