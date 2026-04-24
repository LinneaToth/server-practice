import { createServer } from "node:http";

const animals = [
    'Lejon',
    'Elefant',
    'Pingvin',
    'Bläckfisk',
    'Koala',
    'Flamingo',
];

const server = createServer((req, res) => {
    const { method, url } = req;

    if (method === "GET" && url === "/") return getWelcome(res);
    if (method === "GET" && url === "/animals") return getAllAnimals(res);
    if (method === "GET" && url.includes("/animals/")) return animalAtIndex(res, url);

    return notFound(res);
})


const getWelcome = (res) => {
    res.writeHead(200, { "content-type": "text/plain; charset: utf-8" });
    res.end("Varmt välkommen till djurregistret!")
}

const animalTyper = (animalArray) => {
    return animalArray.join("\n");
}

const getAllAnimals = (res) => {
    res.writeHead(200, { "content-type": "text/plain; charset= utf-8" });
    res.end(animalTyper(animals))
}

const animalAtIndex = (res, url) => {
    console.log(url)
    const index = Number(url.slice(9));

    if (Number.isNaN(index) || index >= animals.length || index < 0) {
        res.writeHead(404, { "content-type": "text/plain; charset: utf-8" });
        res.end("We don't have that animal in store");
        return;
    }

    console.log(index)
    const animalAtIndex = animals[index];
    res.writeHead(200, { "content-type": "text/plain; charset: utf-8" });
    res.end(animalAtIndex)
}


const notFound = (res) => {
    res.writeHead(404, { "content-type": "text/plain; charset: utf-8" });
    res.end("NOT FOUND");
}


server.listen(3020, () => console.log("Djuservern kör på http://localhost:3020"));