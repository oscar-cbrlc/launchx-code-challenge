const StudentService = require("./../../lib/services/StudentService")
const Reader = require("./../../lib/utils/Reader")

describe('Tests for filterByCertification', () => {
    test('should get students by certification', () => {
        const students = [{id: "123a", haveCertification: true},{id: "456b", haveCertification:false},{id: "789c", haveCertification:true}]
        const studentsFiltered = StudentService.filterByCertification(students, true);
        expect(studentsFiltered).toEqual([{id: "123a", haveCertification: true}, {id: "789c", haveCertification:true}]);
    });
});

describe('Tests for filterByCredits', () => {
    test('should return correct objects', () => {
        const students = [{credits: 0},{credits: 50},{credits: 100}]
        const studentsFiltered = StudentService.filterByCredits(students, ">50")
        expect(studentsFiltered).toEqual([{credits: 100}])
    });
    test('should throw an exception if invalid expression', () => {
        const students = [{credits: 0},{credits: 50},{credits: 100}]
        expect(() => {
            StudentService.filterByCredits(students, "=100");
        }).toThrow();
    });
});