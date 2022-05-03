const fs = require("fs");
//const path = require("path")
class Reader {
    static readJsonFile(filePath) {
        const rawdata = fs.readFileSync(filePath)
        return JSON.parse(rawdata);
    }
}

module.exports = Reader;