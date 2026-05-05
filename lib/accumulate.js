function accumulate(list, accumulator) {
  const result = [];

  for (const item of list) {
    result.push(accumulator(item));
  }

  return result;
}

module.exports = accumulate;
