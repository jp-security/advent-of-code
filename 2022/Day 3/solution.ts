import internal = require("stream");
import { parseData } from "../../utils/parsers";

const data = parseData(__dirname, 'input.txt');

let similarItems: string[] = [];
let badgeId: string[] = [];
let compartmentPrio = new Map<string, number>();

for (let i=65; i <= 90; i++){
    compartmentPrio.set(String.fromCharCode(i).toLowerCase(), i-64);
    compartmentPrio.set(String.fromCharCode(i), i-38);
};

function compartmentCompare(sack1: string, sack2: string){
    let internalList: string[] = []
    for (let i=0; i<sack1.length; i++){
        if (sack2.includes(sack1.charAt(i))){
            if (!internalList.includes(sack1.charAt(i))){
                internalList.push(sack1.charAt(i));
                similarItems.push(sack1.charAt(i));
            };
        };
    };
};

function badgeCompare(elfOne: string, elfTwo: string, elfThree: string){
    let badgeInternalList: string[] = []
    for (let i=0; i < elfOne.length; i++){
        if (elfTwo.includes(elfOne.charAt(i))){
            if (elfThree.includes(elfOne.charAt(i))){
                if (!badgeInternalList.includes(elfOne.charAt(i))){
                    badgeId.push(elfOne.charAt(i));
                    badgeInternalList.push(elfOne.charAt(i));
                };
            };
        };
    };
};

function partOne(){
    for (let line in data) {
        const middle = Math.floor(data[line].length/2);
        let sack1: string = data[line].substring(0, middle);
        let sack2: string = data[line].substring(middle, data[line].length);
        compartmentCompare(sack1, sack2);
    };
    const compartmentTotal = similarItems.reduce(
        (sum, current) => sum + compartmentPrio.get(current), 0
    );
    console.log(compartmentTotal);
};

function partTwo(){
    for (let i=0; i < data.length -1; i = i + 3){
        const elfOne = data[i];
        const elfTwo = data[i + 1];
        const elfThree = data[i + 2];
        badgeCompare(elfOne, elfTwo, elfThree);
    };
    const badgeTotal = badgeId.reduce(
        (sum, current) => sum + compartmentPrio.get(current), 0
    );
    console.log(badgeTotal)
};

partOne();
partTwo();