import { parseData } from "../../utils/parsers";

const data = parseData(__dirname, 'input.txt');
const initialStack = data.slice(0, 8);
const moveOrder = data.slice(10);

function createInitialStacks(initialStack: string[]){
    let setupStack: string[][] = [[], [], [], [], [], [], [], [], []];

    for (let i=initialStack.length - 1; i >= 0; i--){
        let splitStack: string[] = initialStack[i].match(/.{1,4}/g);

        for (let i=0; i < 9; i++){
            setupStack[i].push(splitStack[i].trim());
        };
    };

    const moveableStack: string[][] = []

    for (let i=0; i < 9; i++){
        setupStack.forEach(stack => {
            let nonStack: string[] = []
            stack.forEach(element => {
                if (element !== '') {
                    nonStack.push(element);
                };
            });
            moveableStack.push(nonStack);
        });
    };
    return moveableStack;
};

function moveToFrom(totalBoxes: number, startStack: string[], endStack: string[]){
    for (let i=0; i < totalBoxes; i++){
        endStack.push(startStack.pop());
    };
};

function newCraneMoveToFrom(totalBoxes: number, startStack: string[], endStack: string[]){
    if (totalBoxes === 1){
        endStack.push(startStack.pop());
    } else {
        let moreThan = startStack.splice(-totalBoxes, totalBoxes);
        moreThan.forEach(element => {
            endStack.push(element);
        });
    };
}

function partOne(){
    let moveableStack = createInitialStacks(initialStack);

    for (let order in moveOrder){
        let orderSplit: string[] = moveOrder[order].split(" ");
        moveToFrom(
            +orderSplit[1],
            moveableStack[+orderSplit[3] - 1],
            moveableStack[+orderSplit[5] - 1]
        );
    };

    console.log(
        '-----Part One Answer-----\n',
        `${moveableStack[0].pop()}`,
        `${moveableStack[1].pop()}`,
        `${moveableStack[2].pop()}`,
        `${moveableStack[3].pop()}`,
        `${moveableStack[4].pop()}`,
        `${moveableStack[5].pop()}`,
        `${moveableStack[6].pop()}`,
        `${moveableStack[7].pop()}`,
        `${moveableStack[8].pop()}`,
    )
};

function partTwo(){
    let newMoveableStack = createInitialStacks(initialStack);

    for (let order in moveOrder){
        let orderSplit: string[] = moveOrder[order].split(" ");
        newCraneMoveToFrom(
            +orderSplit[1],
            newMoveableStack[+orderSplit[3] - 1],
            newMoveableStack[+orderSplit[5] - 1]
        );
    };

    console.log(
        '-----Part Two Answer-----\n',
        `${newMoveableStack[0].pop()}`,
        `${newMoveableStack[1].pop()}`,
        `${newMoveableStack[2].pop()}`,
        `${newMoveableStack[3].pop()}`,
        `${newMoveableStack[4].pop()}`,
        `${newMoveableStack[5].pop()}`,
        `${newMoveableStack[6].pop()}`,
        `${newMoveableStack[7].pop()}`,
        `${newMoveableStack[8].pop()}`,
    );
};

partOne();
partTwo();




