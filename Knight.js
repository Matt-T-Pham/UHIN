/*
    UHIN Programming interview
    Author: Matthew P.
    8/18/2021
    Given a position on a chess board (Example:  x = 1, y = 2)
    provide a list of all possible moves for the a knight piece.
    Please comment your code describing what your code does and why you choose this approach.

    Assumptions:
        Chess board is an 8x8

        all chess boards start at 1,1

        Bottom left hand corner is 1,1

        coordinate 1,1 is the lower left hand corner of the chessboard on the white side

        knight moves in an L
        moves up or down one square vertically and over two squares horizontally OR up or down two squares vertically
        and over one square horizontally.
 */

/*
    Declaring all needed variables.
 */
let x = null;
let y = null;
const totalNumberOfSquares = 64;
const BoardLength = 8;
//use regex to make sure it is a number, no letters and is less than 8
let regEx = /^[1-8]*$/;
//added moves equation into a const. the calculating through a for loop.
const movesEquation = [
    [1,-2],
    [2,-1],
    [2,1],
    [1,2],
    [-1,2],
    [-2,1],
    [-2,-1],
    [-1,-2]
];
let movement = [];
let board = new Array(BoardLength).fill('[_]').map(() => new Array(BoardLength).fill('[_]'));



/*
    Gets the user inputs using prompts the parses the input make sure it is an int.
 */
function getUserInput(){
    let notANumberFlag = false;
    let xCoordinate = null;
    let yCoordinate = null;

    while(!notANumberFlag){
        xCoordinate  = prompt("input an X coordinate");
        yCoordinate = prompt("input an Y coordinate");

        if(xCoordinate.match(regEx) && yCoordinate.match(regEx)){
            notANumberFlag = true;
        }else{
            alert("please input a valid coordinate between 1 - 8");
        }
    }

    //only parse if the numbers fulfill the coordinate requirements
    x = parseInt(xCoordinate);
    y = parseInt(yCoordinate);

    document.getElementById('xCoordinates').innerHTML ="The X coordinate you have selected is: " + x;
    document.getElementById('yCoordinates').innerHTML ="The Y coordinate you have selected is: " + y;
}

/*
    Function to call to calculate knights movement.
    Inputting the x,y coordinates it will calculate all 8 possible moves.
    If move will put knight out side of the chessboard ignore move.
    Then display coordinates of legal moves.
 */
function KnightMovement(x, y){
    //holder for all the new coordinate after the move
    //moving outside to match other vairables
    //let movement = [];

    /*
        //equations for movement
        let move1 = [x+1,y-2];
        let move2 = [x+2,y-1];
        let move3 = [x+2,y+1];
        let move4 = [x+1,y+2];
        let move5 = [x-1,y+2];
        let move6 = [x-2,y+1];
        let move7 = [x-2,y-1];
        let move8 = [x-1,y-2];
        //store all int the array
        movement.push(move1,move2,move3,move4,move5,move6,move7,move8);
        */

    // Better way to do the moves. Make the moves into a constant array and then loop through it.
    // make check her to make sure moves are legal
    for(let i = 0; i < movesEquation.length;i++){
        let tempx = x + movesEquation[i][0];
        let tempy = y + movesEquation[i][1];
        if(tempx <= BoardLength && tempx >= 1 && tempy<= BoardLength && tempy >= 1)
        movement.push([tempx,tempy]);
    }

    //print out the possible moves
    let holder = document.getElementById('moves')
    for(let i = 0; i < movement.length; i++){
        holder.innerHTML +=  "<p>" + movement[i] + "</p>";
    }

}
/*
    helper function to display board.

    bottom left is 1,1 coordiante

 */
function displayBoard() {

    board[y-1][x-1] = '[K]';

    for (let i = 0; i < movement.length;i++){
        board[movement[i][1] - 1 ][movement[i][0] - 1] = "[X]";
    }
        //print out the possible moves that are within the board limits
        let holder = document.getElementById('board');

        for(let i = board.length-1; i >= 0; i--){
                holder.innerHTML +=  "<p>" + board[i] + "</p>";
        }
}

//calling the functions
getUserInput();
KnightMovement(x, y);
displayBoard();