var message:string ="Hello Player"
console.log(message)

var wordList:string[] = new Array("awkward", "bagpipes", "banjo", "croquet", "crypt", "dwarves", "fervid")

var inputChar:string = "a"
inputChar= inputChar.toLowerCase()

var pick = wordList[Math.floor(Math.random()*wordList.length)];
console.log(pick)

var incorrectGuess:number = 0;

var blankArray:string[] = new Array()

function displayAsBlanks(pick:string,blankArray:string[]):string[] {
    var i:number;
    for(i=0; i<pick.length;i++){
        blankArray.push("_")
    }return blankArray
}
console.log(displayAsBlanks(pick,blankArray))

function compareInput(pick:string, inputChar:string, blankArray:string[], incorrectGuess:number):string[] {

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

    console.log(indices)
    console.log(blankArray)

    if(indices.length == 0)
    {
        console.log("incorrect guess!")
        incorrectGuess++;
    } else {
        console.log(`correct guess with ${indices.length} hits!`)
        
    }return blankArray
}
console.log(compareInput(pick, inputChar, blankArray, incorrectGuess))