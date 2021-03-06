const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";

      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });

  it('returns an error when given an invalid breed and value of data is null', (done) => {
    fetchBreedDescription('Siberiaan', (err, desc) => {
      // we expect error for this scenario
      const expectedError = "Sorry! We can't find any information about that breed";
      assert.equal(err, expectedError);


      // compare returned description which should be null
      assert.equal(desc, null);

      done();
    });
  });
});