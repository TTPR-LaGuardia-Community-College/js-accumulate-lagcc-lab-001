function accumulate(list, accumulator) {
  // write the code in here to make your tests pass!
  let result = [];
  for (let i = 0; i < list.length; i++) {
    result.push(accumulator(list[i])); // apply the accumulator function on each element of the list and save the result in the result array
  }
  return result;
}

module.exports = accumulate;
