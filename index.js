//NODE TEST
console.log("working");


//Write a function "min" that takes 2 arguements which should be numbers and returns to lowest of the two 
//Code Under this line

/*
 * Gets a minimum of two numbers
 * @param {number} num1
 * @param {number} num2
 * @returns {number} 
 */

function min (num1, num2){
    return Math.min(num1, num2);
}




/*Write a function "range" which takes two arguments "start" and "end" that returns an array containing all of the 
integers between and including start and end in sequential order */
//code under this line 

/*
 * Gets a range of numbers
 * @param {number} start <
 * @param {number} end >
 * @returns {number}
 */
function range(start, end){
    var arr = [];
    for(var i=start; i<=end; i++){
    arr.push(i)
    }
    return arr;
}


/*Write a function 'sum' which takes an Array of numbers as an  and argument and returns their sum*/

/*
 *  Gets a sum of an array
 * @param {array} arr
 * @returns {number}
 */

function sum(arr){
    return arr.reduce(((accumulator, currentValue) => 
        accumulator + currentValue
    ),0)
}
 console.log(sum([1,2,3,4,5,6,7,8]))


/* Write a program that uses console.log to print all numbers from 1 to 100 with three exceptions for numbers divisble
by three print "BUZZ" instead of the number and for numbers divisble by 5 print "FIZZ" (instead of the number) if a 
number is divisble both by 5 and by 3 print "FIZZ BUZZ"

For this problem consider researching the modulus operator */

/*
 * Prints a list of 1-100 {numbers} and {strings} 
 * {numbers} divisible by 3 and 5 return {string} FIZZ BUZZ
 * {numbers} divisible by 3 return {string} BUZZ
 * {numbers} divisible by 5 return {string} FIZZ
 * @returns {number} && {string}
 */

function fizzBuzz(){
    //CODE HERE
    const arr = range(1,100);
    arr.forEach(element =>{
        if(element%3 == 0 && element%5 == 0 ){
            console.log("FIZZ BUZZ")
        }
        else if(element%3 == 0){
            console.log("BUZZ");
        }
        else if(element%5 == 0){
            console.log("FIZZ")
        }
        else{
            console.log(element)
        }
    })
}

fizzBuzz();

/* You can get the Nth character (letter) from a string by writting the string variable name plus [N] e.g:

const abc = 'abc';
abc[1]

The return value will be a string containing only 1 character (in the above case that character was 'b') the first 
character has position 0, which causes the last character to be found at position string.length - 1. In other words
a two character string has length two and its characters have positions 1 and 0. write a function that takes a string
as an argument and returns a number that indicate how many uppercase 'B's that string contains once that is completed
write another function which extends the first function by taking in a second arguement which is the character you wish
to count the number of.  */

/*
 * Gets a count of how many capital Bs there are in a {string}
 * @param {string} string
 * @returns {number}
 */


function countBs (string){
    for(var i = 0, len = string.length, count=0, ch; i < len; ++i)
    {
        ch = string.charAt(i);
        if(ch =='B') ++count;
    }
    return count
}

/*
 * Gets a count of how many specified characters there are in a {string}
 * @param {string} string
 * @param {character} character
 * @returns {number}
 */

function countChars (string, character){
    for(var i = 0, len = string.length, count=0, ch; i < len; ++i)
    {
        ch = string.charAt(i);
        if(ch == character) ++count;
    }
    return count
}
countBs("BB bb BB bb BB bb BB");
countChars("ee EE ee EE ee EE", "E");
/* Write a loop that makes seven calls to console.log to output the following triangle:

________________________________
# 
##
###
####
#####
######
#######
________________________________
It may be useful to know that you can find the length of a string by writing .length after it 
eg. let abc = 'abc';
    console.log(abc.length);
*/

/*
 * Prints a triangle of base 7 # wide
 * @returns {strings}
 */

function sevenLoop () {
    //CODE HERE
    var string = ''
    for(var i=0; i<7; i++){
    string += '#';
    console.log(string)
    }
    }

    sevenLoop();

/* Write a program that creates a string which represents an 8x8 grid. At each posistion of the grid  there is either
a space or a # character the characters should form a "cheesboard" when console.log'ed something like this should be 
displayed 

__________________________________________

 # # # # 
# # # #
 # # # # 
# # # # 
 # # # # 
# # # # 
 # # # # 
# # # # 

__________________________________________

once you have completed the program take in an arguement that varies the size of the grid */

/*
 * Prints a chessboard pattern with #'s, base is 8 rows. User can add rows in multiples of 2 by using gridSize @param.
 * @param {number} gridSize
 * @returns {strings}
 */

function chessBoard (gridSize){
const black=" # # # #";
const white="# # # #";
for(var i = 0; i<4+gridSize; i++){
    console.log(black);
    console.log(white);
}
}

chessBoard(2);
//ANY ADDITIONAL COMMENTS OR CONCERNS CAN BE LEFT UNDER THIS LINE 