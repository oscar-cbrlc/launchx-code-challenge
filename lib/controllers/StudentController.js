const Reader = require("./../../lib/utils/Reader");
const StudentService = require("./../../lib/services/StudentService");

const jsonFile = "visualpartners.json";

class StudentController {
    static getAll() {
        return Reader.readJsonFile(jsonFile);
    }

    static getByCertification(hasCertification) {
        const students = this.getAll();
        return StudentService.filterByCertification(students, hasCertification);
    }

    static getByCredits(expression) {
        const students = this.getAll();
        try {
            return StudentService.filterByCredits(students, expression);
        } catch (error) {
            return error;
        }
    }
}

module.exports = StudentController;