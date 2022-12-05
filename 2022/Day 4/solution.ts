import { parseData } from "../../utils/parsers";
const data = parseData(__dirname, 'input.txt');

let partOneOverLapCounter: number = 0;
let partTwoOverLapCounter: number = 0;

function testRange(n1: number, n2: number, t1:number){
    if (n1 <= t1 && t1 <= n2){
        return true
    };
};

data.forEach(element => {
    const [firstPlot, secondPlot] = element.split(',', 2);
    const [firstZone, secondZone] = firstPlot.split('-', 2);
    const [thirdZone, fourthZone] = secondPlot.split('-', 2);

    if (testRange(+firstZone, +secondZone, +thirdZone) && testRange(+firstZone, +secondZone, +fourthZone)){
        partOneOverLapCounter += 1;
    }else if (testRange(+thirdZone, +fourthZone, +firstZone) && testRange(+thirdZone, +fourthZone, +secondZone)){
        partOneOverLapCounter += 1;
    };

    if (testRange(+firstZone, +secondZone, +thirdZone) || testRange(+firstZone, +secondZone, +fourthZone)){
        partTwoOverLapCounter += 1;
    } else if (testRange(+thirdZone, +fourthZone, +firstZone) || testRange(+thirdZone, +fourthZone, +secondZone)){
        partTwoOverLapCounter += 1;
    };
});

console.log(`Part One: ${partOneOverLapCounter}`);
console.log(`Part Tne: ${partTwoOverLapCounter}`);