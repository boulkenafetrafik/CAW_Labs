//exo01
let boundaries = document.querySelectorAll('.boundary');

boundaries.forEach(boundary => {
    boundary.addEventListener('mouseenter', function() {
        boundary.style.backgroundColor = 'red';
    });
});

//exo02
boundaries.forEach(boundary => {
    boundary.addEventListener('mouseenter', function() {
        boundaries.forEach(b => {
            b.style.backgroundColor = 'red';
        });
    });
});

// exo03
let end = document.getElementById('end');
end.addEventListener('mouseenter', function() {
    alert('you win');
});

//exo04
let start = document.getElementById('start');
start.addEventListener('click', function() {
    boundaries.forEach(boundary => {
        boundary.style.backgroundColor = '#eeeeee';
    });
});


////challenges 
//exo06
const startDiv = document.getElementById("start");
const endDiv = document.getElementById("end");
const boundariess = document.querySelectorAll(".boundary");
const statusElement = document.querySelector("h2");
let gameStarted = false;

startDiv.addEventListener("mouseover", () => {
    gameStarted = true;
    statusElement.textContent = ""; 
});

endDiv.addEventListener("mouseover", () => {
    if (gameStarted) {
        statusElement.textContent = "You win!";
        resetGame();
    }
});

boundariess.forEach(boundary => {
    boundary.addEventListener("mouseover", () => {
        if (gameStarted) {
            statusElement.textContent = "You lose!";
            resetGame();
        }
    });
});

//exo07
document.addEventListener("mousemove", (event) => {
    if (gameStarted) {
        const mazeRect = document.getElementById("maze").getBoundingClientRect();
        const isOutsideMaze = (
            event.clientX < mazeRect.left ||
            event.clientX > mazeRect.right ||
            event.clientY < mazeRect.top ||
            event.clientY > mazeRect.bottom
        );

        if (isOutsideMaze) {
            boundariess.forEach(boundary => {
                boundary.style.backgroundColor = "red"; 
            });
            statusElement.textContent = "You lose!";
            resetGame();
        }
    }
});


function resetGame() {
    gameStarted = false;
    boundariess.forEach(boundary => {
        boundary.style.backgroundColor = ""; 
    });
}






