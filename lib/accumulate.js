function accumulate(list, accumulator) {
  const result = [];

  for (let i = 0; i < list.length; i++) {
    result.push(accumulator(list[i]));
  }

  return result;
}

module.exports = accumulate;
