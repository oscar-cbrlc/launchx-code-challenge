class StudentService {
    static getStudentsByCertification(students, hasCertification) {
        return students.filter(student => student.haveCertification == hasCertification)
    }

    static getStudentsByCredits(students, expressionValue) {
        try {
            return students.filter((student) => {
                const expression = Function(`return ${student.credits} ${expressionValue}`);
                return expression();
            })
        }
        catch(ex) {
            throw ex;
        }
    }
}

module.exports = StudentService