const jeep = {
  name: 'jeep',
  age: 2,
  weight: '10 lbs'
};

const character = {
  _id: '5cf5679a915ecad153ab68c9',
  name: 'Aang'
};

const getName = (obj) => {
  const { name } = obj;
  return name;
};

module.exports = { getName };
