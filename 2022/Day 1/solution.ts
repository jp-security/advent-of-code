import { createReadStream } from 'fs';
import { createInterface } from 'readline';

const lines = createInterface(createReadStream("./input.text"));
let elf_array: Array<{elf: string; calories: number}> = [];
let elf_count: number = 0;
let count: number = 0;
let previous_sum: number = 0;

lines.on("line", (input) => {
    count = count + 1;

    if (input.length === 0){
        //console.log('We here')
        elf_array.push(
            {elf: `elf${elf_count}`, calories: previous_sum}
        );
        elf_count = elf_count + 1
        previous_sum = 0
    } else {
        previous_sum = previous_sum + parseInt(input)
    };
});

lines.on("close", () =>{
    const sorted_array: Array<{elf: string, calories: number}> = elf_array.sort((a, b) => {
        if (a.calories < b.calories) {
            return 1;
        };

        if (a.calories > b.calories ){
            return -1;
        };

        return 0;
    });
    const top_three: {elf: string, calories: number}[] = sorted_array.slice(0, 3);
    console.log(top_three);
    console.log('----------------------');
    const top_three_count = top_three.reduce<number>((accumulator, obj) => {
        return accumulator + obj.calories;
    }, 0)
    console.log(top_three_count)
})


