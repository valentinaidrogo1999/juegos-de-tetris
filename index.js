
const velocidad = 50000; //velocidad del juego
const block_side_length = 30; //longitud del lado del bloque
const rows= 25; //fichas en fila
const columns = 25; // fichas en columnas
const score= 20;  //puntuacion
const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#232F6F";
ctx.fillRect(0, 0, 400, 400);











const filas =[
    [],
    [ //FICHA "  I "
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0]
    ],


    [ //FICHA "  L "
        [2,0,0],
        [2,2,2],
        [0,0,0],
      
    ],

    [  //FICHA "  J "
        [0,0,3],
        [3,3,3],
        [0,0,0],
      
    ],

    [  //FICHA " O "
        [4,4],
        [4,4],
        
    ],

    [ //FICHA "  S "
        [0,5,5],
        [5,5,0],
        [0,0,0],
      
    ],

    [
        //FICHA "  T "
        [0,6,0],
        [6,6,6],
        [0,0,0],
      
    ],

    [ //FICHA "  Z "
        [7,7,0],
        [0,7,7],
        [0,0,0],
      
    ],
]

const colores = [
    '#07B7EE', //color de la ficha " I "
    '#FF5C00', //color de la ficha " L "
    '#0038FF', //color de la ficha " J "
    '#EFD917', //color de la ficha " O "
    '#FF0101', //color de la ficha " S "
    '#BD00FF', //color de la ficha " T "
    '#34DF09', //color de la ficha " Z "
]






