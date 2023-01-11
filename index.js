const { parse } = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];

// Check if planet is habitable
function isHabitablePlanet(planet){
    return planet['koi_disposition'] === 'CONFIRMED'  // Check if planet is confirmed 
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11  // Check if the planet has the right amount of energy
        && planet['koi_prad'] < 1.6;  // Check if the planet is too big
}

// Create the file stream
fs.createReadStream('kepler_data.csv')
    // Pipe the file stream to the parse stream to parse the csv file
    .pipe(parse({
        comment: '#',
        columns: true
    }))
    // On each data event do something
    .on('data', (data) => {
        if (isHabitablePlanet(data)){
            habitablePlanets.push(data);
        }
    })
    .on('error', (err) => {
        console.log(err);
    })
    .on('end', () => {
        console.log(habitablePlanets.map((planet) => {
            return planet['kepler_name'];
        }));
        console.log(`${habitablePlanets.length} habiltable planets found`);
    });
