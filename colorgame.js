let numSquare = 6;
let colors = randomColor(numSquare);
let pickedColor = pickColor();
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let reset = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function () {
    messageDisplay.textContent = "";
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    let numSquare = 3;
    colors = randomColor(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
});
hardBtn.addEventListener("click", function () {
    messageDisplay.textContent = "";
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors = randomColor(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
});

reset.addEventListener("click", function () {
    
    colors = randomColor(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    reset.textContent = "Change Color"
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        h1.style.background = " rgb(132, 124, 124)";

    }
});

colorDisplay.textContent = pickedColor;
for (let i = 0; i <= squares.length; i++) {
    squares[i].style.background = colors[i];
    hardBtn.classList.add("selected");
    squares[i].addEventListener("click", function () {
        let clickedColor = this.style.background;
        if (clickedColor === pickedColor) {
            
            messageDisplay.textContent = "Correct!"
            reset.textContent = "Play Again?"
            for (let i = 0; i <= squares.length; i++) {
                squares[i].style.background = pickedColor;
                h1.style.background = pickedColor;
            }
        } else {
            this.style.background = "black"
            messageDisplay.textContent = "Try Again!"
            reset.textContent = "Play Again?"
        }
    });

}

function pickColor() {
    let randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
function randomColor(num) {
    arr = []
    for (let i = 0; i < num; i++) {
        arr.push(generateRandom());
    }
    return arr;
}
function generateRandom() {

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";

}