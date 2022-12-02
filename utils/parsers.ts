import * as fs from 'fs';
import * as path from 'path';

export const parseData = (dir: string, file: string): string[] => {
    return fs.readFileSync(path.join(dir, file), 'utf-8').split('\n');
};