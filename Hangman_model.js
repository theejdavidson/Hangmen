var message = "Hello Player";
console.log(message);
var wordList = new Array("awkward", "bagpipes", "banjo", "croquet", "crypt", "dwarves", "fervid");
var inputChar = "a";
inputChar = inputChar.toLowerCase();
var pick = wordList[Math.floor(Math.random() * wordList.length)];
console.log(pick);
var incorrectGuess = 0;
var blankArray = new Array();
function displayAsBlanks(pick, blankArray) {
    var i;
    for (i = 0; i < pick.length; i++) {
        blankArray.push("_");
    }
    return blankArray;
}
console.log(displayAsBlanks(pick, blankArray));
function compareInput(pick, inputChar, blankArray, incorrectGuess) {
    var indices = [];
    var index = pick.indexOf(inputChar);
    while (index >= 0) {
        indices.push(index);
        index = pick.indexOf(inputChar, index + 1);
    }
    var i;
    for (i = 0; i < indices.length; i++) {
        blankArray[indices[i]] = inputChar;
    }
    console.log(indices);
    console.log(blankArray);
    if (indices.length == 0) {
        console.log("incorrect guess!");
        incorrectGuess++;
    }
    else {
        console.log("correct guess with " + indices.length + " hits!");
    }
    return blankArray;
}
console.log(compareInput(pick, inputChar, blankArray, incorrectGuess));
