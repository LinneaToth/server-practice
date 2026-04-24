import express from "express";

const mascots = [
    { name: "Luke", color: "green" },
    { name: "Stella", color: "orange" },
    { name: "Mia", color: "speckled" },
]

const app = express();
const PORT = process.env.PORT ?? 3000;


app.get("/api/mascots", (req, res) => {
    res.json(mascots);
});

app.get("/api/mascots/search", (req, res) => {
    const { name, color } = req.query;
    if (!name && !color) {
        res.send("Nothing searched nothing found 🤷");
        return;
    }
    if (name) {
        res.json(mascots.filter(m => m.name.toLowerCase() === name.toLowerCase().trim()));
        return;
    }

    if (color) {
        res.json(mascots.filter(m => m.color.toLowerCase() === color.toLowerCase().trim()));
        return;
    }
});


app.get("/api/mascots/:index", (req, res) => {
    const { index } = req.params;

    const invalidSearch = Number.isNaN(Number(index)) || index >= mascots.length || index < 0;

    if (invalidSearch) {
        res.send("We don't deal with those kind of things around here..");
        return;
    }

    res.json(mascots[index]);
})


app.get('/{*path}', (req, res, next) => {
    res.status(404).send("404. Don't know what you are looking for.");
})

app.listen(PORT, () => {
    console.log(`API server running on http://localhost/${PORT}`);
});


