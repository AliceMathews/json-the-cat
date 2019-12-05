const request = require('request');

const breed = process.argv.slice(2).join('');
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
// const URL = `https://api.thecatapiii.com/v1/breeds/search?q=${breed}`;

request(URL, (error, response, body) => {
  if (error === null) {
    if (body !== '[]') {
      const data = JSON.parse(body);
      console.log(data[0].description);
    } else {
      console.log("Sorry! We can't find any information about that breed");
    }

  } else {
    console.log(`Request Error: ${error.code} at Host: ${error.host}`);
  }
  
});