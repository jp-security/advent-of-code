import { parseData } from "../../utils/parsers";

const data = parseData(__dirname, 'input.txt');

let partOneScore: number = 0
let partTwoScore: number = 0

const ELF_KEY = {
    'A': 'rock',
    'B': 'paper',
    'C': 'scissors'
};

const PLAYER_KEY = {
    'X': 'rock',
    'Y': 'paper',
    'Z': 'scissors'
};

const WIN_CONDITION = new Map<string, string>([
    ['rock', 'scissors'],
    ['paper', 'rock'],
    ['scissors', 'paper']
]);

const SCORE_KEY = {
    'win': 6,
    'draw': 3,
    'loss': 0,
    'rock': 1,
    'paper': 2,
    'scissors': 3
}

for (let index = 0; index < data.length-1; index++) {
    const [elf, me] = data[index].split(' ');
    // Part One
    if (ELF_KEY[elf] === PLAYER_KEY[me]){
        partOneScore = partOneScore + SCORE_KEY[PLAYER_KEY[me]] + SCORE_KEY['draw'];
    } else if (WIN_CONDITION.get(PLAYER_KEY[me]) === ELF_KEY[elf]) {
        partOneScore = partOneScore + SCORE_KEY[PLAYER_KEY[me]] + SCORE_KEY['win'];
    } else if (WIN_CONDITION.get(ELF_KEY[elf]) === PLAYER_KEY[me]){
        partOneScore = partOneScore + SCORE_KEY[PLAYER_KEY[me]] + SCORE_KEY['loss'];
    };
    // Part Two
    if (me === 'Z') {
        for (let [winner, loser] of WIN_CONDITION) {
            if (loser === ELF_KEY[elf]){
                partTwoScore = partTwoScore + SCORE_KEY[winner] + SCORE_KEY['win'];
            };
        };
    } else if (me === 'Y') {
        partTwoScore = partTwoScore + SCORE_KEY[ELF_KEY[elf]] + SCORE_KEY['draw'];
    } else if (me === 'X') {
        partTwoScore = partTwoScore + SCORE_KEY[WIN_CONDITION.get(ELF_KEY[elf])] + SCORE_KEY['loss'];
    };
};
console.log(partOneScore);
console.log(partTwoScore);
