import * as fs from 'fs';

export function jsonenv(filepath: string, envar: string): void {
    var file = fs.readFileSync(filepath, "utf8");//, (err, data) => {
    var obj: string = JSON.parse(file);
    const str: string = JSON.stringify(obj);
    process.env[envar] = str;
};