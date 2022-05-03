const fs = require("fs");
//const path = require("path")
class Reader {
    static readJsonFile(filePath) {
        const rawdata = fs.readFileSync("visualpartners.json")
        return JSON.parse(rawdata);
    }
}

module.exports = Reader;