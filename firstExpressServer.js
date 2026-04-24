import express from "express";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use((req, res, next) => {
    console.log("New request incoming!");
    next();
})

app.get('/cats', (req, res) => {
    console.log("Cat request.")
    res.send("THIS IS A CAT RESPONSE!!!");

})

app.get('/dogs', (req, res) => {
    console.log("Dog request.")
    res.send("THIS IS A DOG RESPONSE!!!");

})

app.listen(PORT, () => {
    console.log(`Running on http://localhost/${PORT}`);
});

