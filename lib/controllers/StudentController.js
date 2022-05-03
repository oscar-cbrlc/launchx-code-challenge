const Reader = require("./../../lib/utils/Reader");
const StudentService = require("./../../lib/services/StudentService");

const jsonFile = "visualpartners.json";

class StudentController {
    static getAll() {
        return Reader.readJsonFile(jsonFile);
    }
}

module.exports = StudentController;