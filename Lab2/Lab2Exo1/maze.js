const boundries = document.querySelectorAll('.boundary');
const end = document.getElementById('end');
const start = document.getElementById('start');
const status = document.getElementById('status');
const maze = document.getElementById('maze');

boundries.forEach(boundry =>{
    boundry.addEventListener('mouseover', ()=>{
        boundries.forEach(bound =>{ 
            bound.style.border = '2px solid red';
        })
        end.style.pointerEvents = 'none';
        status.style.color = 'red';
        status.innerHTML = 'You Lose!';
    })
})

end.addEventListener('mouseover', ()=>{
    status.style.color = 'green';
    status.innerHTML = 'You Win!';
})
start.addEventListener('mouseover', ()=>{
    maze.addEventListener('mouseleave', () => {
        boundries.forEach(bound => {
            bound.style.border = '2px solid red';
        });
        end.style.pointerEvents = 'none';
        status.style.color = 'red';
        status.innerHTML = 'You Lose!';
    });
})

start.addEventListener('click', ()=>{
    boundries.forEach(bound =>{ 
        bound.style.border = '1px solid black';
    })
    end.style.pointerEvents = 'auto';
    status.innerHTML = 'Move your mouse over the "S" to begin.'
    status.style.color = 'black';
})

