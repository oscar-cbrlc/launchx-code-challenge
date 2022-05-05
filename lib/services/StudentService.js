class StudentService {
    static filterByCertification(students, hasCertification) {
        return students.filter(student => student.haveCertification == hasCertification)
    }

    static filterByCredits(students, expressionValue) {
        const validExpressions = ["==", "<=", ">=", "<", ">"]
        try {
            var validExpression = false;
            for (let ex of validExpressions) {
                validExpression = expressionValue.includes(ex);
                if (validExpression) break;
            }
            if (!validExpression) throw {error: `invalid expression "${expressionValue}"`, validExpressions: validExpressions};

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