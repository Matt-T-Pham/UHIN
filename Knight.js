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
    let movement = [];
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

    //print out the possible moves that are within the board limits
    var holder = document.getElementById('moves')
    for(let i = 0; i < movement.length; i++){
        if(movement[i][0] <= BoardLength && movement[i][0] >= 1 && movement[i][1] <= BoardLength && movement[i][1] >= 1)
        holder.innerHTML +=  "<p>" + movement[i] + "</p>";
    }
}

//calling the functions
getUserInput();
KnightMovement(x, y);
