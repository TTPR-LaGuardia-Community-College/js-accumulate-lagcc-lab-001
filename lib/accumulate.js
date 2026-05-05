function accumulate(list, accumulator) {
  // write the code in here to make your tests pass!
  const arr = []
  list.forEach(element => {
    arr.push(accumulator(element))
  });

  return arr

}

module.exports = accumulate;
