import express from "express";

const app = express();
const PORT = process.env.PORT ?? 3000;



app.use((req, res, next) => {
    console.log("New request incoming!");
    next();
})

app.get('/', (req, res) => {
    console.log("E.T. phone home")
    res.send("Greetings! This is HOME!");

})

app.get('/cats', (req, res) => {
    console.log("Cat request.")
    res.send("THIS IS A CAT RESPONSE!!!");

})

app.get('/dogs', (req, res) => {
    console.log("Dog request.")
    res.send("THIS IS A DOG RESPONSE!!!");
})

app.get('/dynamic/:something', (req, res, next) => {
    const { something } = req.params;
    res.send("I'm super flexible, they say, I've even got " + something + " for you!");
})

// app.get('/dynamic/:something/:postId', (req, res, next) => {
//     const { something, postId } = req.params;
//     res.send("I'm super flexible, they say, I've even got " + something + " for you, while also showing the data for this post: " + postId);
// })

app.get('/dynamic/:placeringA/:placeringB', (req, res, next) => {
    const { placeringA, placeringB } = req.params;
    res.send("Text från placering A i URLen: " + placeringA + "och text från placering B i URLen: " + placeringB);
})

app.get("/search", (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send("Nothing searched nothing found 🤷");
        return;
    }
    res.send(`Oh, you're looking for ${q}`);
})



app.get('/{*path}', (req, res, next) => {
    res.status(404).send("404");
})


app.listen(PORT, () => {
    console.log(`Running on http://localhost/${PORT}`);
});

