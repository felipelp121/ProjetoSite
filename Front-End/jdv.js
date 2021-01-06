
document.addEventListener('DOMContentLoaded', ()=> {
    let squares = document.querySelectorAll(".square");
    acao = squares.forEach((square) => {
        square.addEventListener('click', handleClick);
       
    })
    
})

function handleClick(event){

    let square = event.target;
    let position = square.id;

    if (handleMove(position)){
        
        setTimeout(() => {
            let jogadorVencedor = document.getElementById('jogadorVenceu');
            jogadorVencedor.innerHTML = "Venceu !!!"
            setTimeout( () => {
                alert("O jogo acabou, o jogador: " + playerTime + " Venceu !!!")
            }, 10);
        }, 10);
    };
    updateSquares();
}

function updateSquares(){
    
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {

        let position = square.id;
        let symbol = board[position];
        let jogadorDaVez = document.getElementById('jogador')
        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
            if (playerTime == 0){jogadorDaVez.innerHTML = '&#x1F6E1'}
            else{jogadorDaVez.innerHTML = '&#x2694'}
            
        }
    })
}



