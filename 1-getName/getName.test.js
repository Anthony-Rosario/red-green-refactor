const { getName } = require('./getName.js');
describe('function getName returns the name property from an object', () => {
  it('returns name of an object', () => {
    const jeep = {
      name: 'jeep',
      age: 2,
      weight: '10 lbs'
    };
  
    const name = getName(jeep);

    expect(name).toEqual('jeep');
  });

  it('returns the name property of any object', () => {
    const character = {
      _id: '5cf5679a915ecad153ab68c9',
      name: 'Aang'
    };
    const name = getName(character);

    expect(name).toEqual('Aang');
  });
});
