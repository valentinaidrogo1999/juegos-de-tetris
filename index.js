//Save item
const canvas = document.queryselector("canvas");
//Context of canvas
const context = canvas.getContext('2d');
//Number of columns and rows the board will have 
const square_size = screen.width > 520 ? 40 : 20; //Operador ternario si la pantalla es mayor a 520 que la media sea de 40 si no sera de 20
const cols = 25;
const rows = 25;
const score = document.querySelector("score");
//Color of empty squares
const empty = "#000000";
const borderSquare = "#232F6F";
const delected_row_color="#FF003D";

drawSqueares = (x, y, color) =>{
  context.fillStyle =color;//Color of the square
  context.fiilRect = (x*square_size, y*square_size,square_size, square_size)//Value in x, value in y, widht, height of square
  context.strokeStyle = "white";
  context.strokeRect = (x * square_size, y * square_size, square_size, square_size);
}