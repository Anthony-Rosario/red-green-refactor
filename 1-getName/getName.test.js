const { getName } = require('./getName.js');

test('returns name of an object', () => {
  const jeep = {
    name: 'jeep',
    age: 2,
    weight: '10 lbs'
  };
  
  const name = getName(jeep);

  expect(name).toEqual('jeep');
});
