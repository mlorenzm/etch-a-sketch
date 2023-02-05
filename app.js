let board = document.getElementById('board');
let btn = document.getElementById('btn');
let size = 0;

btn.addEventListener('click', () => {
    resetGrid();
    do{
        size = parseInt(prompt('How many squares do you want per side? (< 100)'));
    } while(isNaN(size) || size > 100);
        board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        for(let i = 0; i < size*size; i++){
            let square = document.createElement('div');
            square.style.border = 'solid rgb(116, 115, 115) 1px';
            board.appendChild(square);
            let alpha = 0.1;
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = `rgba(0, 0, 0, ${alpha})`;
                alpha += 0.2;
            })
        }
});

let resetGrid = () => {
    board.innerHTML = '';
};
