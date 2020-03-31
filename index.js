//NODE TEST
console.log("working");


//Write a function "min" that takes 2 arguements which should be numbers and returns to lowest of the two 
//Code Under this line

function min (num1, num2){
    return Math.min(num1, num2);
}




/*Write a function "range" which takes two arguments "start" and "end" that returns an array containing all of the 
integers between and including start and end in sequential order */
//code under this line 
function range(start, end){
    var arr = [];
    for(var i=start; i<=end; i++){
    arr.push(i)
    }
    return arr;
}


/*Write a function 'sum' which takes an Array of numbers as an  and argument and returns their sum*/
function sum(num1, num2){
    return num1 + num2;
}



/* Write a program that uses console.log to print all numbers from 1 to 100 with three exceptions for numbers divisble
by three print "BUZZ" instead of the number and for numbers divisble by 5 print "FIZZ" (instead of the number) if a 
number is divisble both by 5 and by 3 print "FIZZ BUZZ"

For this problem consider researching the modulus operator */

function fizzBuzz(){
    //CODE HERE
    const arr = range(1,100);
    arr.forEach(element =>{
        if(element%3 == 0){
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

function countBs (string){
    for(var i = 0, len = string.length, count=0, ch; i < len; ++i)
    {
        ch = string.charAt(i);
        if(ch =='B') ++count;
    }
    return count
}

function countChars (string, character){
    for(var i = 0, len = string.length, count=0, ch; i < len; ++i)
    {
        ch = string.charAt(i);
        if(ch == character) ++count;
    }
    return count
}

console.log(countBs("Bello BaBy I baby"));
console.log(countChars("Eveyrythin EEE E ee E", 'E'));
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

function chessBoard (gridSize){
const black=" # # # #";
const white="# # # #";
for(var i = 0; i<4+gridSize; i++){
    console.log(black);
    console.log(white);
}
}


//ANY ADDITIONAL COMMENTS OR CONCERNS CAN BE LEFT UNDER THIS LINE 