const capitalizeAndFilter = (arr) => {
  const newArr = [];

  for(let i = 0; i < arr.length; i++) {
    const diffArray = arr[i];
    const upperCaseString = diffArray.toUpperCase();

    if(upperCaseString.charAt(0) !== 'F') {
      newArr.push(upperCaseString);
    }
  }
  return newArr;
};

module.exports = { capitalizeAndFilter };
