import * as fs from 'fs';

function jsonenv(filepath: string, envar: string): void {
    var file = fs.readFileSync(filepath, "utf8");//, (err, data) => {
    var obj = JSON.parse(file);
    const str: string = JSON.stringify(obj);
    process.env[envar] = str;
};

function read(envar: string, param?: string) {
    var jsonstring = process.env[envar];
    var obj: object = {};
    if (jsonstring) {
        obj = JSON.parse(jsonstring);
    }
    return obj;
};

exports.jsonenv = jsonenv;
exports.read = read;