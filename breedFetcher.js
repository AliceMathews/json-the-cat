const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  // const URL = `https://api.thecatapiii.com/v1/breeds/search?q=${breedName}`;

  request(URL, (error, response, body) => {
    if (error === null) {
      if (body !== '[]') {
        const data = JSON.parse(body);
        callback(error, data[0].description);
      } else {
        const errorMessage = "Sorry! We can't find any information about that breed";
        callback(errorMessage, null);
      }
  
    } else {
      callback(error, null);
    }
    
  });
};

module.exports = { fetchBreedDescription };