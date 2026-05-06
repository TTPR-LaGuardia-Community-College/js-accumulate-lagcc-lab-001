
module.exports = accumulate;

function accumulate(list, accumulator) {
  let result = [];

  for (let i = 0; i < list.length; i++) {
    result.push(accumulator(list[i]));
  }

  return result;
}

module.exports = accumulate;