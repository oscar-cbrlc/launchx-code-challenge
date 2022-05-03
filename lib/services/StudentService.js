class StudentService {
    static filterByCertification(students, hasCertification) {
        return students.filter(student => student.haveCertification == hasCertification)
    }

    static filterByCredits(students, expressionValue) {
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