class HangmanModel {

    private limbs: number = 0;

    private blanked_phrase: string;
    private guess: any = document.getElementById("guess");
    private blankArray:string[] = new Array();

    constructor(private pick: string, private allowed_limbs: number = 6) {
        this.blanked_phrase = '_ '.repeat(pick.length);
    }

    public toString = (): string => {
        return `HangmanModel
            pick: ${this.pick}
            blanked_phrase: ${this.blanked_phrase}
            limbs: ${this.limbs}`;
    }

    public haveWon(): boolean {
        console.log(`Have won ${this.limbs} vs ${this.allowed_limbs} => ${this.limbs == this.allowed_limbs}`);
        return this.limbs == this.allowed_limbs;
    }

    public haveLost(): boolean {
        return this.blanked_phrase == this.pick;
    }

    public displayAsBlanks(blanked_phrase:string,blankArray:string[]):string[] {
        var i:number;
        for(i=0; i<blanked_phrase.length;i++){
            blankArray.push("_")
    }return blankArray

    public evaluateGuess() {
        // TODO: 
        var indices:Array<number> = [];
        var index:number = this.blanked_phrase.indexOf(this.guess);
        while (index >=0) {
            indices.push(index);
            index = pick.indexOf(inputChar, index + 1);
        }
    
        var i:number;
        for(i=0;i<indices.length;i++)//replaces blanks in blank array with correct guess
        {
            this.blankArray[indices[i]] = inputChar;
        }
        console.log(`Evaluating '${guess}' ${this.limbs} limbs`);
        this.limbs += 1;
    }
}

class Player {

    private model: HangmanModel;

    private static letters = "abcdefghijklmnopqrstuvwxyz";

    private moves: Array<[Player, string]> = [];

    constructor(private name: string, private pick: string) {
        this.model = new HangmanModel(pick);
    }

    public takeTurn(otherPlayers: Array<Player>): Player {
        var chosenTarget = otherPlayers[Math.floor(Math.random() * otherPlayers.length)];
        /// TODO: Get user input guess
        var guess = Player.letters[Math.floor(Math.random() * Player.letters.length)];

        chosenTarget.acceptGuess(guess);
        this.moves.push([chosenTarget, guess]);

        console.log(this.toString());
        return chosenTarget;
    }

    public acceptGuess(guess: string) {
        this.model.evaluateGuess(guess);
    }

    public haveLost(): boolean {
        return this.model.haveLost();
    }

    public haveWon(): boolean {
        return this.model.haveWon();
    }

    public toString(): string {
        return `Player(${this.name}): ` + this.moves.map((move) => `(${move[0].name}, '${move[1]}')`).join(', ');
    }
}

class Hangmen {

    private losers: Array<Player> = [];
    //private var playersVal:string = document.getElementById("playersTotal").value;
   // private var playersTotal:number = parseInt(this.playersVal, 10);

    constructor(private players: Array<Player>) {

    }

    public toString = (): string => {
        return "---Players---\n" +
            this.players.map((player) => player.toString()).join("\n");
    }


    public async runGame() {
        gameloop:
        while (this.players.length > 1) {
            for (var player of this.players) {
                var otherPlayers = this.players.filter((otherPlayer) => otherPlayer != player);
                var chosenTarget = player.takeTurn(otherPlayers);
                if (player.haveLost()) {
                    this.losers.push(player);
                    this.players = otherPlayers;
                }

                if (chosenTarget.haveWon()) {
                    console.log(`WE have a winner ${chosenTarget}`);
                    break gameloop;
                }
                await sleep(200);
            }
        }
    }
}

var hm1 = new Player("p1", "dingleberry-doo");
var hm2 = new Player("p2", "dingleberry-boo");
var hm3 = new Player("p3", "dingleberry-foo");

var hm = new Hangmen([hm1, hm2, hm3]);

hm.runGame();

console.log(hm.toString());

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}