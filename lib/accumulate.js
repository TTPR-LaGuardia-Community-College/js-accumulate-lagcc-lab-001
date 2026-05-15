function accumulate(list, accumulator) {
  var result = [];

  for (var i = 0; i < list.length; i++) {
    result.push(accumulator(list[i]));
  }

  return result;
}

module.exports = accumulate;