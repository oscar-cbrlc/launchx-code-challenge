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

app.listen(port, () => {
    console.log(`Visualpartners API in localhost:${port}`)
});