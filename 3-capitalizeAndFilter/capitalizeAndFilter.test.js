const { capitalizeAndFilter } = require('./capitalizeAndFilter.js');

describe('capitalizeAndFilter takes an array of strings', () => {
  it('capitalizes all strings, and filters out any string that starts with the letter f', () => {
    const names = ['Derrick', 'Chad', 'Fred', 'kyle', 'Franklin'];
    
    const result = capitalizeAndFilter(names);

    expect(result).toEqual(['DERRICK', 'CHAD', 'KYLE']);
  });
});
