const Reader = require("./../../lib/utils/Reader")

class StudentService {
    static getStudentsByCertification(students, hasCertification) {
        return students.filter(student => student.haveCertification == hasCertification)
    }
}

module.exports = StudentService