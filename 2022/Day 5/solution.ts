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

function printAnswer(part: string, stack: string[][]){
    console.log(
        `-----Part ${part} Answer-----\n`,
        `${stack[0].pop()}`,
        `${stack[1].pop()}`,
        `${stack[2].pop()}`,
        `${stack[3].pop()}`,
        `${stack[4].pop()}`,
        `${stack[5].pop()}`,
        `${stack[6].pop()}`,
        `${stack[7].pop()}`,
        `${stack[8].pop()}`,
    )
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
    printAnswer('One', moveableStack);
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
    printAnswer('Two', newMoveableStack);
};

partOne();
partTwo();
