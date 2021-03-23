const capitalizeAndFilter = (arr) => {
  const newArr = [];

  arr.forEach(element => {
    const upperCaseString = element.toUpperCase();
    
    
    if(upperCaseString.charAt(0) !== 'F') {
      newArr.push(upperCaseString);
    }
  });
  return newArr;
};

module.exports = { capitalizeAndFilter };
