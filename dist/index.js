"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function jsonenv(filepath, envar) {
    var file = fs.readFileSync(filepath, "utf8"); //, (err, data) => {
    var obj = JSON.parse(file);
    var str = JSON.stringify(obj);
    process.env[envar] = str;
}
;
function read(envar, param) {
    var jsonstring = process.env[envar];
    var obj = {};
    if (jsonstring) {
        obj = JSON.parse(jsonstring);
    }
    return obj;
}
;
exports.jsonenv = jsonenv;
exports.read = read;
