const { fetchBreedDescription } = require('./breedFetcher');

const breed = process.argv.slice(2).join('');

fetchBreedDescription(breed, (error, data) => {
  if (error) {
    console.log('Error fetch details: ', error);
  } else {
    console.log(data);
    console.log(typeof data)
  }
});