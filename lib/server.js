const express = require("express");
const StudentController = require("./controllers/StudentController");

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
    res.json({message: "Welcome to Visualpartners API!"})
});

app.get("/v1/students", (req, res) => {
    const students = StudentController.getAll();
    res.json(students);
});

app.get("/v1/students/certification=:certification", (req, res) => {
    const hasCertification = Function(`return ${req.params.certification}`);
    const students = StudentController.getByCertification(hasCertification());
    res.json(students);
});

app.get("/v1/students/credits:expression", (req, res) => {
    const expression = req.params.expression;
    const students = StudentController.getByCredits(expression);
    res.json(students);
});

app.listen(port, () => {
    console.log(`Visualpartners API in localhost:${port}`)
});