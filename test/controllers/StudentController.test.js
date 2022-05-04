const StudentController = require("../../lib/controllers/StudentController");
const StudentService = require("./../../lib/services/StudentService");
const Reader = require("./../../lib/utils/Reader");

describe('Tests for getAll', () => {
    test('should get all the elements in the list', () => {
        const students = Reader.readJsonFile("visualpartners.json");
        const result = StudentController.getAll();
        expect(result).toEqual(students);
    });
});

describe('Tests for getByCertification', () => {
    test('should get the correct students', () => {
        const students = Reader.readJsonFile("visualpartners.json");
        const resultFromService = StudentService.filterByCertification(students, true);
        const resultFromController = StudentController.getByCertification(true);
        expect(resultFromController).toEqual(resultFromService);
    });
});

describe('Tests for getByCredits', () => {
    test('should get the correct students', () => {
        const students = Reader.readJsonFile("visualpartners.json");
        const resultFromService = StudentService.filterByCredits(students, "<=5", ["==", "<=", ">=", "<", ">"]);
        const resultFromController = StudentController.getByCredits("<=5");
        expect(resultFromController).toEqual(resultFromService);
    });
    test('should get error message if invalid expression', () => {
        const result = StudentController.getByCredits("-4");
        expect(result).toEqual({error: `invalid expression "-4"`, validExpressions: ["==", "<=", ">=", "<", ">"]});
    });
});