const express = require("express");
const StudentController = require("./controllers/StudentController");

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
    res.json({message: "Welcome to Visualpartners API!"})
});

app.listen(port, () => {
    console.log(`Visualpartners API in localhost:${port}`)
})