const { copyAndPush } = require('./copyAndPush.js');

describe('function returns a new array with all the items in the original array and a new item pushed to the end', () => {
  it('function should push new item into array', () => {
    const expected  = [1, 2, 3, 4];
    const arr = [1, 2, 3];

    const result = copyAndPush(arr, 4);

    expect(result).toEqual(expected);
  });

  it('original array is unchanged', () => {
    const expected = [1, 2, 3];
    const arr = [1, 2, 3];

    copyAndPush(arr, 4);

    expect(arr).toEqual(expected);
  });
});
