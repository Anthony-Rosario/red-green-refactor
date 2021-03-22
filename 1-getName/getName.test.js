const { getName } = require('./getName.js');

test('returns name of an object', () => {
  const name = 'jeep';

  expect(name).toEqual('jeep');
});
