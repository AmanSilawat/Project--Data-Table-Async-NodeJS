const express = require('express');
const app = express();

// Chance - Random generator helper for JavaScript
const chance = require('chance').Chance();

// Randomize the order of the elements in a given array using the Fisher-Yates algorithm.
const shuffleArray = require('shuffle-array');

// make a static path
app.use(express.static('public'));

// make RandomSource data
const data = {
    headers: ['Name', 'Age', 'Profession', 'Country'],
    rows: new Array(10).fill(undefined).map(() => {
        return [
            chance.name(),
            chance.age(),
            chance.profession(),
            chance.country({full: true}),
        ];
    })
}

app.get('/data', (req, res) => {
    res.json({
        headers: data.headers,
        rows: shuffleArray(data.rows),
        lastUpdated: new Date().toISOString()
    })
});

app.listen(3030, () => console.log('Your post is: 3030'));