let color = 'black';
let click = true ;

// ------------ board construction ----------
function makeBoard( size ){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach( (div)=>div.remove() )
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size*size;

    for( let i=0; i<amount; i++){
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare )
        square.style.backgroundColor = '#3e7090';
        board.insertAdjacentElement('beforeend', square);
    }
}

function changeSize( input ){
    if(input>=2 && input<=100){
        document.querySelector('.error').style.display = 'none';
        makeBoard(input);
    }
    else{
        console.log( "kuch aur size batao" ); 
        document.querySelector('.error').style.display = 'flex';
    }     
}

function colorSquare(  ){
    if(click){
        if( color ==='random'){
            this.style.backgroundColor= `hsl(${Math.random()*360}, 100%, 50% )`;
        }
        else
            this.style.backgroundColor= color;
    }
}

function changeColor( choice ){
    color = choice;
}

function resetBoard(  ){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach( (div)=>div.style.backgroundColor= '#3e7090' )
}
// ---------------------------------

document.querySelector('body')
    .addEventListener('click', (e)=>{
        if( e.target.tagName != 'BUTTON'){
            click = !click ; 
            if(click)
                document.querySelector(".mode").textContent = " Mode : color kar raha hai " ;
            else
                document.querySelector(".mode").textContent = " Mode : dhakkan band hai " ;
        }
    })

makeBoard(16)