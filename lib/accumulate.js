function accumulate(list, accumulator) {
  // write the code in here to make your tests pass!
  const result = [];
  list.forEach(e => result.push(accumulator(e)));
  return result;
}

module.exports = accumulate;
