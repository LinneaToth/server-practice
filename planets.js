import { createServer } from "node:http";

const planets = [
    { id: 1, name: 'Merkurius', distanceFromSun: 57.9, moons: 0 },
    { id: 2, name: 'Venus', distanceFromSun: 108.2, moons: 0 },
    { id: 3, name: 'Jorden', distanceFromSun: 149.6, moons: 1 },
    { id: 4, name: 'Mars', distanceFromSun: 227.9, moons: 2 },
    { id: 5, name: 'Jupiter', distanceFromSun: 778.5, moons: 95 },
    { id: 6, name: 'Saturnus', distanceFromSun: 1432, moons: 146 },
    { id: 7, name: 'Uranus', distanceFromSun: 2867, moons: 28 },
    { id: 8, name: 'Neptunus', distanceFromSun: 4515, moons: 16 },
];

const server = createServer((req, res) => {
    const { method, url } = req;


})
