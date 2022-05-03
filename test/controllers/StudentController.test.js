const StudentController = require("../../lib/controllers/StudentController");
const StudentService = require("./../../lib/services/StudentService");
const Reader = require("./../../lib/utils/Reader");

describe('Name of the group', () => {
    test('should get all the elements in the list', () => {
        const students = Reader.readJsonFile("visualpartners.json");
        const result = StudentController.getAll();
        expect(result).toEqual(students);
    });
});