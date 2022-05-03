const StudentService = require("./../../lib/services/StudentService")
const Reader = require("./../../lib/utils/Reader")
describe('Tests for getAllStudents', () => {
    test('should get students by certification', () => {
        const students = [{id: "123a", haveCertification: true},{id: "456b", haveCertification:false},{id: "789c", haveCertification:true}]
        const studentsFiltered = StudentService.getStudentsByCertification(students, true);
        expect(studentsFiltered).toEqual([{id: "123a", haveCertification: true}, {id: "789c", haveCertification:true}]);
    });
});