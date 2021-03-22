const copyAndPush = (arr, value) => {
  const arrayCopy = [...arr, value];

  return arrayCopy;
};

module.exports = { copyAndPush };
