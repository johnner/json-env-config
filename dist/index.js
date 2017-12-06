"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function jsonenv(filepath, envar) {
    var file = fs.readFileSync(filepath, "utf8"); //, (err, data) => {
    var obj = JSON.parse(file);
    var str = JSON.stringify(obj);
    process.env[envar] = str;
}
exports.jsonenv = jsonenv;
;
