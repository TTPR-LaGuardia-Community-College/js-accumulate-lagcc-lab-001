function accumulate(list, accumulator) {
  // write the code in here to make your tests pass!
  let result = list.map((x) => accumulator(x));
  return result;
}

module.exports = accumulate;
