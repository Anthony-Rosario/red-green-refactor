const request = require('superagent');

const fetchQuotes = async() => {
  const { body } = await request.get('http://futuramaapi.herokuapp.com/api/quotes');
  
  const arrLength = body.length;

  return body[Math.floor(Math.random() * arrLength)];

};

module.exports = { fetchQuotes };
