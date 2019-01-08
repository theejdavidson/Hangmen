/*
var message:string ="How many players?"
console.log(message)

var playersTotal:number//signifies the total number of players

var playerNum:number[]//array for each player

var wordList:string[] = new Array("awkward", "bagpipes", "banjo", "croquet", "crypt", "dwarves", "fervid")

var inputChar:string = "a"
inputChar= inputChar.toLowerCase()

var pick = wordList[Math.floor(Math.random()*wordList.length)];
//console.log(pick)

var incorrectGuess:number = 0;


}
//console.log(displayAsBlanks(pick,blankArray))

function compareInput(pick:string, inputChar:string, blankArray:string[], incorrectGuess:number):string[] {

    if(incorrectGuess == 6)
    {
        console.log("Your enemy was hanged")
    }
    var indices:Array<number> = [];
    var index:number = pick.indexOf(inputChar);
    while (index >=0) {
        indices.push(index);
        index = pick.indexOf(inputChar, index + 1);
    }

    var i:number;
    for(i=0;i<indices.length;i++)//replaces blanks in blank array with correct guess
    {
        blankArray[indices[i]] = inputChar;
    }

    //console.log(indices)
    //console.log(blankArray)

    if(indices.length == 0)
    {
        console.log("incorrect guess!")
        incorrectGuess++;
    } else {
        console.log(`correct guess with ${indices.length} hits!`)
        
    }return blankArray
}
//console.log(compareInput(pick, inputChar, blankArray, incorrectGuess))
//inputChar = "b"
//console.log(compareInput(pick, inputChar, blankArray, incorrectGuess))

function game(pick:string, inputChar:string, blankArray:string[], incorrectGuess:number):void {
    //while(incorrectGuess<6)
    //{
    console.log(pick)
    displayAsBlanks(pick, blankArray)
    console.log(displayAsBlanks(pick, blankArray))
    compareInput(pick, inputChar, blankArray, incorrectGuess)
    console.log(compareInput(pick, inputChar, blankArray, incorrectGuess))
    //}
}
console.log(game(pick, inputChar, blankArray, incorrectGuess))
function gameMaster(playerNum:number[], playersTotal:number):void {
    var i:number
    for(i=0;i<playersTotal;i++)
    {
        playerNum.push(i)
    }
}

var hm = new HangmanModel("dingleberry");

console.log(hm.toString());
*/