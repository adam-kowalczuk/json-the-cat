const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {

    if (error) {
      // console.log("error: ", error);
      callback(error, null) 
      return;
    }
  
    const data = JSON.parse(body);
    const breed = data[0];
    if (!breed) {
      // console.log("Breed not found");
      callback("Breed not found");
      return;
    }
  
    // console.log(breed.description);
      callback(null, breed.description);
  });
};

module.exports = {
  fetchBreedDescription
}