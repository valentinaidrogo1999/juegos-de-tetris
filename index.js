


//Save item
let canvas = document.getElementById("canva");
//Context of canvas
let context = canvas.getContext("2d");
//Number of columns and rows the board will have 
const square_size =screen.width > 420 ? 19.6 : 9.6; //Operador ternario si la pantalla es mayor a 520 que la media sea de 40 si no sera de 20
//const square_size = 20
const cols = 25;
const rows = 25;
const score = document.querySelector("score");
//Color of empty squares
const empty = "#000000";
const borderSquare = "#232F6F";
const delected_row_color="#FF003D";//Color for delected row

//function to draw the squares
drawSquares = (x, y, color) =>{
    context.fillStyle =color;//Color of the square
    context.fillRect(x*square_size, y*square_size,square_size, square_size)//Value in x, value in y, widht, height of square
    context.strokeStyle = "#232F6F";
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

//build the pieces and the positions they have
const O =[
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
const S =[
    [
        [ 0, 1, 1],
        [ 1, 1, 0],
        [ 0, 0, 0],
    ],
    [
        [ 1, 0, 0],
        [ 1, 1, 0],
        [ 0, 1, 0],
    ],
]
const Z =[
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
const pieces = [
    [O, "#EFD917"],
    [I, "#07B7EE"],
    [S, "#34DF09"],
    [Z, "#FF0101"],
    [T, "#BD00FF"],
    [L, "#FF5C00"],
    [J, "#0038FF"]
];

//Generate random pieces. Choose a random number that will be the index to select the piece from the array
randomPiece =()=> {
    let randPiece = Math.floor(Math.random() * pieces.length) //Index position to select figure from array of pieces
    return new Piece(pieces[randPiece][0], pieces[randPiece][1]); // selected figure and its color as parameters of the object: piece      
}
let p = randomPiece();







