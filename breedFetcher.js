const request = require('request');
const breedName = process.argv.slice(2)[0];
const url = `https://api.thecatapi.ca/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {

  if (error) {
    console.log("error: ", error);
    return;
  }

  const data = JSON.parse(body);
  const breed = data[0];
  if (!breed) {
    console.log("Breed not found");
    return;
  }

  console.log(breed.description);

});