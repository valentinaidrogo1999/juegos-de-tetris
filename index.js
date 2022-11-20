//Save itemdrawSq
const canvas = document.getElementById("canva");
//Context of canvas
let context = canvas.getContext("2d");
// let contextNext = nextPi.getContext("2d");
//Number of columns and rows the board will have 
const square_size = screen.width > 425 ? 20 : 15; //Operador ternario si la pantalla es mayor a 520 que la media sea de 40 si no sera de 20
//const square_size = 20
const cols = screen.width > 425 ? 20 : 15;
const rows = screen.width > 425 ? 15 : 20;
canvas.width = cols * square_size;
canvas.height = rows * square_size;
const Score = document.getElementById("score");
//Color of empty squares
const empty = "#000000";
var gameOver = false;
//function to draw the squares
drawSquares = (x, y, color) => {
    context.fillStyle = color;//Color of the square
    context.fillRect(x * square_size, y * square_size, square_size, square_size)//Value in x, value in y, widht, height of square
    context.strokeStyle = "#6100FF";
    context.strokeRect(x * square_size, y * square_size, square_size, square_size);
}

//Create the board
let board = [];
for (r = 0; r < rows; r++) {
    board[r] = [];
    for (c = 0; c < cols; c++) {
        board[r][c] = empty;
    }
}
//Draw the board
drawBoard = () => {
    for (r = 0; r < rows; r++) {
        for (c = 0; c < cols; c++) {
            drawSquares(c, r, board[r][c])
        }
    }
}
drawBoard();

//building the pieces with matrices and the positions they will have
const O = [
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
    ]
];
const I = [
    [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
    ]
];
const S = [
    [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0],
    ],
    [
        [1, 0, 0],
        [1, 1, 0],
        [0, 1, 0],
    ],
]
const Z = [
    [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0],
    ],
    [
        [0, 0, 1],
        [0, 1, 1],
        [0, 1, 0],
    ],
]
const T = [
    [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 1],
        [0, 1, 0]
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0]
    ],
    [
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 0]
    ]
];
const L = [
    [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1]
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [1, 0, 0]
    ],
    [
        [1, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
    ]
];
const J = [
    [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0]
    ],
    [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 1, 1],
        [0, 1, 0],
        [0, 1, 0]
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 1]
    ],
];
//a color is assigned to each piece
const pieces = [
    [O, "#EFD917"],
    [I, "#07B7EE"],
    [S, "#34DF09"],
    [Z, "#FF0101"],
    [T, "#BD00FF"],
    [L, "#FF5C00"],
    [J, "#0038FF"]
];

function randomPiece() {
    if (!gameOver) {
        let randPiece = Math.floor(Math.random() * pieces.length)
        return new Piece(pieces[randPiece][0], pieces[randPiece][1])
    }
}
let p = randomPiece();

function Piece(figure, color) {
    this.figure = figure;
    this.color = color;
    this.newFigure = 0;
    this.actFigure = this.figure[this.newFigure];
    this.x = 3;
    this.y = -2;
}

Piece.prototype.fill = function (color) {
    for (r = 0; r < this.actFigure.length; r++) {
        for (c = 0; c < this.actFigure.length; c++) {
            if (this.actFigure[r][c]) {
                drawSquares(this.x + c, this.y + r, color);
            }
        }
    }
}

Piece.prototype.draw = function () {
    this.fill(this.color);
}

Piece.prototype.unDraw = function () {
    this.fill(empty);
}

Piece.prototype.moveDown = function () {
    if (!this.collision(0, 1, this.actFigure)) {
        this.unDraw();
        this.y++;
        this.draw();
    } else {
        this.lock();
        p = randomPiece();
    }
}

Piece.prototype.moveRight = function () {
    if (!this.collision(1, 0, this.actFigure)) {
        this.unDraw();
        this.x++;
        this.draw();
    }
}

Piece.prototype.moveLeft = function () {
    if (!this.collision(-1, 0, this.actFigure)) {
        this.unDraw();
        this.x--;
        this.draw();
    }
}

Piece.prototype.rotate = function () {
    let nextPat = this.figure[(this.newFigure + 1) % this.figure.length];
    let kick = 0;

    if (this.collision(0, 0, nextPat)) {
        if (this.x > cols / 2) {
            kick = -1;
        } else {
            kick = 1;
        }
    }

    if (!this.collision(kick, 0, nextPat)) {
        this.unDraw();
        this.x += kick;
        this.newFigure = (this.newFigure + 1) % this.figure.length;
        this.actFigure = this.figure[this.newFigure];
        this.draw();
    }
}
let score = 0;
Piece.prototype.lock = function () {
    for (r = 0; r < this.actFigure.length; r++) {
        for (c = 0; c < this.actFigure.length; c++) {
            if (!this.actFigure[r][c]) {
                continue;
            }
            if (this.y + r < 0) {
                swal({
                    title: "Game Over",
                    icon :"img/game over.png",
                  });
                gameOver = true;
                break;
            }
            board[this.y + r][this.x + c] = this.color;
        }
    }

    for (r = 0; r < rows; r++) {
        let isRowFull = true;
        for (c = 0; c < cols; c++) {
            isRowFull = isRowFull && (board[r][c] != empty);
        }
        if (isRowFull) {
            for (y = r; y > 1; y--) {
                for (c = 0; c < cols; c++) {
                    board[y][c] = board[y - 1][c];
                }
            }
            for (c = 0; c < cols; c++) {
                board[0][c] = empty;
            }
            score += 10;
        }
    }
    drawBoard();
    Score.innerHTML = score;
}

Piece.prototype.collision = function (x, y, piece) {
    for (r = 0; r < piece.length; r++) {
        for (c = 0; c < piece.length; c++) {
            if (!piece[r][c]) {
                continue;
            }
            let newX = this.x + c + x;
            let newY = this.y + r + y;

            if (newX < 0 || newX >= cols || newY >= rows) {
                return true;
            }
            if (newY < 0) {
                continue;
            }
            if (board[newY][newX] != empty) {
                return true;
            }
        }
    }
    return false;
}

document.addEventListener("keydown", CONTROL);
// document.addEventListener("touchmove",MOBILECONTROL)

function CONTROL(event) {
    if (event.key == "ArrowLeft") {
        p.moveLeft();
        dropStart = Date.now();
    } else if (event.key == "ArrowUp") {
        p.rotate();
        dropStart = Date.now();
    } else if (event.key == "ArrowRight") {
        p.moveRight();
        dropStart = Date.now();
    } else if (event.key == "ArrowDown") {
        p.moveDown();
    }
}

let upButton = document.getElementById("up-button");
    upButton.onclick = function () {
    p.rotate();
}
let moveLeft = document.getElementById("moveLeft");
     moveLeft.onclick = function () {
    p.moveLeft();
}
let moveRight = document.getElementById("moveRight");
    moveRight.onclick = function () {
    p.moveRight();
}
let moveDown= document.getElementById("moveDown");
    moveDown.onclick=function(){
    p.moveDown();
}


let dropStart = Date.now();

function drop() {
    let now = Date.now();
    let delta = now - dropStart;
    if (delta > 550) {
        p.moveDown();
        dropStart = Date.now();
    }
    if (!gameOver) {
        requestAnimationFrame(drop);
    }
}
drop();

function restart() {
    window.location.reload()
}